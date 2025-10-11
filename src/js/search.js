const campoPesquisa = document.getElementById('campo-pesquisa');
const lupaPesquisa = document.getElementById('lupa-pesquisa');
const exibicaoDaPesquisa = document.getElementById('exibicao-da-pesquisa'); 

lupaPesquisa.addEventListener('click', () => {

    async function buscarDados() {
          
        try {
            const valorInput = campoPesquisa.value;

                const resposta = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${valorInput}&format=json&origin=*`);
 
                //const resposta = await fetch('/server.js')
               
                 
                const dados = await resposta.json();
                //console.log(dados);

                //remover o botão de menu quando a pesquisa for realizada
                btnMenu.classList.remove('btn-menu');


                /* COM IF */
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


                /* SEM IF */
               /*  let htmlResultados = '';
                const resultado = dados.query.search;
                resultado.forEach(item => {
                    htmlResultados += (`<p><strong>${item.title}</strong>: ${item.snippet}</p>`);
                });
                exibicaoDaPesquisa.innerHTML = htmlResultados;
                console.log(htmlResultados); */


                /* JEITO CERTO DE USAR OS DOIS JUNTOS */
                const resultado = dados.query.search;
                let htmlResultados = ''
                if (resultado.length === 0) {
                    exibicaoDaPesquisa.innerHTML = `<p>Pesquisa não disponível</p>`
                } 
                resultado.forEach(item => {
                    htmlResultados += (`<p><strong>${item.title}</strong>: ${item.snippet}</p>`)
                });
                exibicaoDaPesquisa.innerHTML = htmlResultados;



        } catch(erro) {
            console.log(`Dados não disponível: ${erro}`);
        }
    }
    buscarDados();
}); 


/* O QUE FALTA FAZER AQUI? */
// Fazer com que o front não acesse a API diretamente como está acessando agora, mas sim, conduzir ele direto para o arquivo server.js do backend, já que estamos configurando um servidor local :) 



/*
✅ Melhor abordagem para você:
1. Usar o if fora do forEach, como eu mostrei antes: primeiro verifica se resultado.length === 0, aí mostra a mensagem "Pesquisa não disponível".
2. Se tiver resultados, aí sim você faz o forEach normalmente.
3. Isso deixa o código mais robusto e claro para o usuário. */