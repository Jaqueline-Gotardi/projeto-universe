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
                console.log(dados);

                //remover o botão de menu quando a pesquisa for realizada
                btnMenu.classList.remove('btn-menu');

                //PARA EXIBIR A PESQUISA SE O CAMPO FOR PREENCHIDO 
                //const resultado = dados.query.search;
                const resultado = dados;
                //console.log(resultado)
                let htmlResultados = ''
                if (resultado.length === 0) {
                    exibicaoDaPesquisa.innerHTML = `<p>Pesquisa não disponível</p>`
                } 
                resultado.forEach(item => {
                    htmlResultados +=  `
                    <div class= "resultado-item">
                        <h3>${item.title}</h3>
                        <p><strong>📅 Data:</strong>${item.date_created}</p>
                        <p><strong>📍 Localização:</strong>${item.location}</p>
                        <p><strong>📝 Descrição:</strong>${item.description}</p>
                        <img src="${item.href}" alt="${item.title}" style="max-width: 200px; border-radius: 8px;"></img>
                        </div>`;
                    
                    /* (`<p><strong>${item.title}</strong>: ${item.date_created}=${item.date_created}=${item.location}=${item.description}=${item.description_508}=${item.keywords}=${item.href}</p>`) */
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



        /* PARA CONCERTAR:
         o Node está bloqueado de fazer conexões HTTPS externas, algo está impedindo o acesso (pode ser o IPv6, proxy, firewall, ou bloqueio na porta 443). */