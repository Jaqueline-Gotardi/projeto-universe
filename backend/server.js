const express = require('express');
const path = require('path');
const app = express()
// É necessário instalar uma biblioteca dotenv para usar o .env (arquivo deve conter sua chave api, caso precise de uma), abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
require('dotenv').config()
//const apiKey = process.env.API_KEY 
//console.log(process.env) 

//acessando a pasta public, pra iniciar a conexão do front com o back local
app.use(express.static(path.join(__dirname, '../public')));
 
const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros 
const { error } = require('console');
/* const { stringify } = require('querystring');
const { error } = require('console'); */

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json'); //indica o formato da resposta

    //para autorizar o navegador a acessar as requisições vindas do Front
    //res.setHeader("Access-Control-Allow-Origin", "http://localhost:5501"); //acessar a origem
    res.setHeader("Access-Control-Allow-Origin", "*"); //o "*" permite rodar o servidor de qualquer origem
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); //acessar os métodos
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Accept, X-Requested-With"); //acessar o cabeçalho
    //res.status(200).end()

    //para permitir a navegação no servidor
    if (req.method === "OPTIONS") {
        res.statusCode = 200;
        res.end()
        return;
    } 

    async function receberDados() {
        const queryParams = req.url.split('?')[1]; //para acessar o que vem depois do "?" da url
        const params = new URLSearchParams(queryParams);
        const title = params.get('title') || ''; //pegando o parâmetro
        const q = title?.trim();
        const isEpic = /earth|terra|epic/i.test(q) //verifica o termo buscado pra decidir qual api chamar...

        let resultadosFinais = []; //array q vai guardar todos os resultados  (epic + gratuita)

        if (isEpic) {
            try {
                //busca dados na api Epic
                console.log('Tentado API epic. . .')
            const respostaComChave = await fetch(`https://api.nasa.gov/EPIC/api/natural/all?&api_key=${process.env.API_KEY}`);
            

            const dadosComChave = await respostaComChave.json();
            //console.log(JSON.stringify(dadosComChave, null, 2));
            //"null, 2" é apenas para deixar as informações mais visíveis

            //se vier vazio ou não for um array, tenta fallback (API gratuita)
            if (Array.isArray(dadosComChave) && dadosComChave.length > 0) { //para mostrar apenas 5
                console.log('Dados encontrados na EPIC. Formatando e adicionando. . .')

                const resultadosComChave = dadosComChave.map(item => ({
                    source: 'EPIC',
                    title: item.caption || 'Sem título (epic)',
                    date_created: item.date || 'Sem data',
                    location: 'Earth',
                    description: item.caption || 'Sem descrição',
                    href: `https://epic.gsfc.nasa.gov/archive/natural/${item.date.split(' ')[0].replace(/-/g,'/')}/png/${item.image}.png`
                }));
                resultadosFinais.push(...resultadosComChave);
            } else {
                console.log('EPIC não retornou dados para a data. Seguindo para a gratuita.')
            }
        } catch (erro) {
            console.log('Erro ao acessar API EPIC (mas seguindo para a API gratuita):', erro)
        }
    }


    try {
        console.log('Chamando API NASA Images (Gratuita)...')
        //receber o valor do input
        const respostaGratuita = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
        const dadosGratuitos = await respostaGratuita.json();

        //filtra e formata resultados da API grátis (a que não usa chave)
                const resultadosGratutitosFiltrados = dadosGratuitos.collection.items //cada API tem sua própria 'estrutura'
            .filter(item => 
            item.data &&  
            item.links &&
            item.links.some(link => link.render === 'image')
)
//transforma os dados da NASA num formato que o front entende.
.map(item => ({
    source: 'IMAGES',
    title: item.data[0].title,
    date_created: item.data[0].date_created || 'Sem data', //fallback
    location: item.data[0].location || 'Sem localização', //fallback
    description: item.data[0].description || 'Sem descrição', //fallback
    href: item.links.find(link => link.render === 'image').href //fallback
}));
resultadosFinais.push(...resultadosGratutitosFiltrados);
    } catch (erro){
        console.log('Erro an API Images:', erro);
    }


    if(resultadosFinais.length > 0) {
        res.statusCode = 200;
        res.end(JSON.stringify(resultadosFinais));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: 'Nenhum resultado encontrado em nenhuma das APIs.'}));
    }
}

if (req.url.startsWith('/search')) {
    receberDados();
} else {
    res.statusCode = 404;
    res.end(JSON.stringify({error: 'Rota não encontrada.'}))
}
});


//inicia o servidor na porta 3000
server.listen(3000, () => { 
    console.log('Servidor em execução em http://localhost:3000/');
});