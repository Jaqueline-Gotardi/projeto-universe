// É necessário instalar uma biblioteca dotenv para usar o .env, abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
require('dotenv').config()
process.env.API_KEY
//console.log(process.env)

const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json'); //indica o formato da resposta

    if(req.url.startsWith('/search')) { 
        
//receber o valor do input
const resposta = fetch(`https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=$&format=json&origin=*`);
const dados = resposta.JSON;
res.end(JSON.stringify(dados));


//fetch('https://localhost:3000/search?=${valorInput}', { method: 'GET', body: JSON.stringify({title:'title', snippet: 'snippet'})});

        res.statusCode = 200;

        const queryParams = req.url.split('?')[1]; //para acessar o que depois do "?" da url
        const params = new URLSearchParams(queryParams);

        const title = params.get('title'); //pegando o parâmetro
        const snippet = params.get('snippet'); //pegando o parâmetro

        const dadosJson = {title, snippet}; //acessando os parâmetros
        res.end(JSON.stringify(dadosJson)); //envia a resposta em formato JSON
        //console.log(dadosJson); 
    } else {
    res.statusCode = 404; //se falhar a requisição, vai mostrar o erro clássico "404"
    res.end(JSON.stringify({error: 'Pane no sistema, tente novamente daqui a 15 minutos'}));
    }
})

server.listen(3000, () => { //inicia o servidor na porta 3000
    console.log('Servidor em execução em https://localhost:3000/');
})