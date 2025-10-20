const express = require('express');
const path = require('path');
const app = express()
// É necessário instalar uma biblioteca dotenv para usar o .env, abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
require('dotenv').config()


//const apiKey = process.env.API_KEY
//console.log(process.env)

app.use(express.static(path.join(__dirname, '../public')));
 
const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros 

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
        
    if(req.url.startsWith('/search')) { 
        
        const queryParams = req.url.split('?')[1]; //para acessar o que vem depois do "?" da url
        const params = new URLSearchParams(queryParams);

        const title = params.get('title'); //pegando o parâmetro
        /* const date_created = params.get('date_created');
        const location = params.get('location');
        const description = params.get('description');
        const description_508 = params.get('description_508');
        const keywords = params.get('keywords');
        const href = params.get('href');  */

//receber o valor do input
const resposta = await fetch(`https://images-api.nasa.gov/search?q=${title}`, {
    method: 'GET',
    //headers: {'content-type': 'application/json',},
    //body: JSON.stringify({valor: valorInput}),
});

//transforma a resposta em json 
const dados = await resposta.json();
//console.log(dados.collection.items)
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
    //description_508: item.data[0].description_508,
    //keywords: item.data[0].keywords,
    //href: item.links[0].href, 
}));

//res.setHeader('Content-type', 'application/json')

        res.statusCode = 200;

        //const queryParams = req.url.split('?')[1]; //para acessar o que depois do "?" da url
        //const params = new URLSearchParams(queryParams);

        //const title = params.get('title'); //pegando o parâmetro
        //const snippet = params.get('snippet'); //pegando o parâmetro

        //const dadosJson = {title, snippet};
        //res.end(JSON.stringify(dadosJson)); //envia a resposta em formato JSON

        //const enviarDados = await dadosJson.json() //acessando os parâmetros
        //res.end(JSON.stringify(enviarDados));

        //console.log(dadosJson); 
        res.end(JSON.stringify(resultadosFiltrados));
    } else {
    res.statusCode = 404; //se falhar a requisição, vai mostrar o erro clássico "404"
    res.end(JSON.stringify({error: 'Pane no sistema, tente novamente daqui a 15 minutos'}));
    }
}
receberDados();
})

//inicia o servidor na porta 3000
server.listen(3000, () => { 
    console.log('Servidor em execução em http://localhost:3000/');
})