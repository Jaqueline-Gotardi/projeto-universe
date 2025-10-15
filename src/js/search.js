/* PARA CONSUMIR UMA API SEM PRECISAR DE BACKEND:

const campoPesquisa = document.getElementById('campo-pesquisa');
const lupaPesquisa = document.getElementById('lupa-pesquisa');
const exibicaoDaPesquisa = document.getElementById('exibicao-da-pesquisa'); 

lupaPesquisa.addEventListener('click', () => {

    async function buscarDados() {
          
        try {
            const valorInput = campoPesquisa.value;

                const resposta = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${valorInput}&format=json&origin=*`);
                 
                const dados = await resposta.json();
                //console.log(dados);

                //remover o botão de menu quando a pesquisa for realizada
                btnMenu.classList.remove('btn-menu');

                //PARA EXIBIR A PESQUISA SE O CAMPO FOR PREENCHIDO 
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
}); */




/* LIGANDO API COM BACKEND LOCAL: */
const campoPesquisa = document.getElementById('campo-pesquisa');
const lupaPesquisa = document.getElementById('lupa-pesquisa');
const exibicaoDaPesquisa = document.getElementById('exibicao-da-pesquisa'); 

    async function enviarDados() {
          
        try {

            //pega o valor do input
            const valorInput = campoPesquisa.value;
            //valorInput.post

                //enviar o valor do input para o servidor back
                const response = await fetch(`http://localhost:3000/search?title=${valorInput}`, 
                    { method: 'GET', 
                        //headers: {'content-type': 'application/json',},

                        //envia o valor em formato JSON
                        //body: JSON.stringify({ valor: valorInput /*title:'title', snippet: 'snippet'*/})
                    });

                    //console.log(response);

                const dados = await response.json();
                //console.log(dados);

                //remover o botão de menu quando a pesquisa for realizada
                btnMenu.classList.remove('btn-menu');

                //PARA EXIBIR A PESQUISA SE O CAMPO FOR PREENCHIDO 
                //const resultado = dados.query.search;
                const resultado = dados;
                let htmlResultados = ''
                if (resultado.length === 0) {
                    exibicaoDaPesquisa.innerHTML = `<p>Pesquisa não disponível</p>`
                } 
                resultado.forEach(item => {
                    htmlResultados += (`<p><strong>${item.title}</strong>: ${item.snippet}</p>`)
                });
                exibicaoDaPesquisa.innerHTML = htmlResultados;

        } catch(erro) {
            exibicaoDaPesquisa.innerHTML = `<p>Erro ao buscar na API. Tente novamente. </p>`;
            console.log(`Dados não disponível: ${erro}`);
        }
    }
    //enviarDados();

        lupaPesquisa.addEventListener('click', () => {
            enviarDados()
        })

        campoPesquisa.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                enviarDados();
        }
        });