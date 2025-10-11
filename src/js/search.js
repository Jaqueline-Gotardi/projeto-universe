const campoPesquisa = document.getElementById('campo-pesquisa');
const lupaPesquisa = document.getElementById('lupa-pesquisa');
const exibicaoDaPesquisa = document.getElementById('exibicao-da-pesquisa'); 

lupaPesquisa.addEventListener('click', () => {

    async function buscarDados() {
          
        try {
            const valorInput = campoPesquisa.value;

                const resposta = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${valorInput}&format=json&origin=*`);
 
               
                 
                const dados = await resposta.json();
                console.log(dados);

                //remover o botão de menu quando a pesquisa for realizada
                btnMenu.classList.remove('btn-menu');

                /* let htmlResultados = '';
                const resultado = dados.query.search;

                resultado.forEach(item => {
                    if (resultado.length === 0) {
                    exibicaoDaPesquisa.innerHTML = `<p>Pesquisa não disponível</p>`
                } else {
                    htmlResultados += (`<p><strong>${item.title}</strong>: ${item.snippet}</p>`);
                }    
                exibicaoDaPesquisa.innerHTML = htmlResultados;
                console.log(htmlResultados);
                }); */

                let htmlResultados = '';
                const resultado = dados.query.search;

                resultado.forEach(item => {

                    htmlResultados += (`<p><strong>${item.title}</strong>: ${item.snippet}</p>`);

                });
                exibicaoDaPesquisa.innerHTML = htmlResultados;
                console.log(htmlResultados);

        } catch(erro) {
            console.log(`Dados não disponível: ${erro}`);
        }
    }
    buscarDados();
}); 


/* O QUE FALTA FAZER AQUI? */
// Fazer com que o front não acesse a API diretamente como está acessando agora, ams sim, conduzir ele direto para o arquivo server.js do backend, já que estamos configurando um servidor local :) 