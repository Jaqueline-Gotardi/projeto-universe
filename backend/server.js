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

        if (isEpic) {
            try {
                //busca dados na api Epic
            const respostaComChave = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/2025-10-10?&api_key=${process.env.API_KEY}`);

            const dadosComChave = await respostaComChave.json();
            //console.log(JSON.stringify(dadosComChave, null, 2));
            //"null, 2" é apenas para deixar as informações mais visíveis

            //se vier vazio ou não for um array, tenta fallback (API gratuita)
            if (!Array.isArray(dadosComChave) || dadosComChave.length === 0) { //para mostrar apenas 5
                console.log('Sem dados na EPIC, tentando API gratuita. . .')

                const resultadoFallback = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
                const dadosFallback = await resultadoFallback.json();

                //filtra e formata resultados da API grátis (a que não usa chave)
                const resultadosFiltrados = dadosFallback.collection.items //cada API tem sua própria 'estrutura'
                //mantém só os itens que têm título + imagem.
                .filter(item => 
              item.data &&
              item.data[0].title.toLowerCase().includes(title.toLowerCase()) &&
              item.links &&
              item.links.some(link => link.render === 'image')
)

//transforma os dados da NASA num formato que o front entende.
.map(item => ({
    title: item.data[0].title,
    date_created: item.data[0].date_created || 'Sem data', //fallback
    location: item.data[0].location || 'Sem localização', //fallback
    description: item.data[0].description || 'Sem descrição', //fallback
    href: item.links.find(link => link.render === 'image').href //fallback
}));
        res.statusCode = 200;
        res.end(JSON.stringify(resultadosFiltrados));
        return; //aqui sai da função pra busca não continuar
}
                //Se EPIC trouxe dados, mostra eles...
                const resultadosComChave = dadosComChave.slice(0,5).map(item => ({
                title: item.caption || 'Sem título',
                date_created: item.date || 'Sem data', //fallback
                location: 'Earth',
                description: item.caption || 'Sem descrição',
                href: `https://epic.gsfc.nasa.gov/archive/natural/${item.date.split(' ')[0].replace(/-/g,'/')}/png/${item.image}.png`,
            }));
            res.statusCode = 200;
            res.end(JSON.stringify(resultadosComChave));

    } catch (erro) {
            console.log('Erro API EPIC:', erro);
            res.statusCode = 500;
            res.end(JSON.stringify({'Falha ao acessar a API' :erro.message}))
            } 

        } else {
            //Se for um termo que não tenha na EPIC...
        //} (req.url.startsWith('/search')) {
            try {

                //if(req.url.startsWith('/search')) { 
        
        //const queryParams = req.url.split('?')[1]; //para acessar o que vem depois do "?" da url
        //const params = new URLSearchParams(queryParams);

        //const title = params.get('title'); //pegando o parâmetro

//receber o valor do input
const resposta = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
    //{
    //method: 'GET',
//});

//transforma a resposta em json 
const dados = await resposta.json();
console.log(JSON.stringify(dados, null, 2))
//"null, 2" é apenas para deixar as informações mais visíveis

//para filtrar os termos que foram pesquisados
const resultadosFiltrados = dados.collection.items

//mantém só os itens que têm título + imagem.
.filter(item => 
    item.data &&
    item.data[0].title.toLowerCase().includes(title.toLowerCase()) &&
    item.links &&
    item.links.some(link => link.render === 'image')
)

//transforma os dados da NASA num formato que o front entende.
.map(item => ({
    title: item.data[0].title,
    date_created: item.data[0].date_created || 'Sem data', //fallback
    location: item.data[0].location || 'Sem localização', //fallback
    description: item.data[0].description || 'Sem descrição', //fallback
    href: item.links.find(link => link.render === 'image').href //fallback
}));
        res.statusCode = 200;
        res.end(JSON.stringify(resultadosFiltrados));
   
    } catch(erro) {
        console.log('Erro API images:', erro);
    res.statusCode = 500; //problemas na conexão com api
    res.end(JSON.stringify({error: 'Pane no sistema, tente novamente daqui a 15 minutos'}));
    }
}
    }
    receberDados();
});


//else {
    //res.statusCode = 404;  //se falhar a requisição, vai mostrar o erro clássico "404"
    //res.end(JSON.stringify({error: 'Pesquisa não encontrada'}))}}
                /* console.error('Pane no sistema, tente novamente daqui a 15 minutos', dadosComChave);
                res.statusCode = 400;
                res.end(JSON.stringify({
                    error: 'A resposta da Nasa não veio no formato esperado',
                    detalhes: dadosComChave                
                }))
        }}}}

        } else { */

    
//receberDados();
    //}
//inicia o servidor na porta 3000
server.listen(3000, () => { 
    console.log('Servidor em execução em http://localhost:3000/');
});