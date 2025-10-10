const { error } = require('console');
const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json'); //indica o formato da resposta

    if(req.url.startsWith('/search')) {
        res.statusCode = 200;

        const queryParams = req.url.split('?')[1];
        const params = new URLSearchParams(queryParams);

        const title = params.get('title');
        const snippet = params.get('snippet');

        const dadosJson = {title, snippet};
        res.end(JSON.stringify(dadosJson)); //envia a resposta em formato JSON
        console.log(dadosJson);

    } else {
    res.statusCode = 404;
    res.end(JSON.stringify({error: 'Pane no sistema, tente novamente daqui a 15 minutos'}));
    }
})

server.listen(3000, () => {
    console.log('Servidor em execução em https://localhost:3000/');
})