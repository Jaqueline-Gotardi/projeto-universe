/* PARA CONSUMIR UMA API SEM PRECISAR DE BACKEND: USANDO A API DA WIKIPEDIA

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
const campoPesquisa = document.getElementById("campo-pesquisa");
const lupaPesquisa = document.getElementById("lupa-pesquisa");
const exibicaoDaPesquisa = document.getElementById("exibicao-da-pesquisa");
const mostrarPesquisa = document.getElementById("mostrar-pesquisa");

async function enviarDados() {
  try {
    //pega o valor do input
    const valorInput = campoPesquisa.value;

    //enviar o valor do input para o servidor back
    const response = await fetch(
      `http://localhost:3000/search?title=${valorInput}`,
      {
        method: "GET",
      }
    );

    const dados = await response.json();
    console.log(dados);

    mostrarPesquisa.classList.remove("mostrar-pesquisa");

    //PARA EXIBIR A PESQUISA SE O CAMPO FOR PREENCHIDO
    const resultado = dados;
    //console.log(resultado) 
    let htmlResultados = "";
    if (resultado.length === 0) {
      mostrarPesquisa.innerHTML = `<p>Pesquisa não disponível</p>`;
    } 
    resultado.forEach((item) => {
      htmlResultados += `
      <div class= "resultado-item" style= "padding: 40px;">
      <h3 style= "font-family: Orbitron">${item.title}</h3>
      <br>
      <p style= "font-family: Space mono"><strong>📅 Data:</strong>${item.date_created}</p>
      <p style= "font-family: Space mono"><strong>📍 Localização:</strong>${item.location}</p>
      <p style= "font-family: Space mono; max-width: 500px; 
  width: 90%; margin: 0 auto;"><strong>📝 Descrição:</strong>${item.description}</p>
      <img src="${item.href}" alt="${item.title}" style="border-radius: 8px;"></img>
      </div>
      <br><br>`;
    });
    mostrarPesquisa.innerHTML = htmlResultados;

    /* PARA EXIBIR A PESQUISA EMBAIXO E COLOCAR O MENU, BARRA DE PESQUISA E A CASINHA EM LINHA HORIZONTAL */
    const bgMenu = document.querySelector('.background-menu');
    const faixa = document.getElementById('faixa');
    if (resultado.length > 0) { //se a pesquisa for maior que 0 (se tiver termos)
    document.getElementById('tela-login').style.display = 'none';
    document.querySelector('.faixa').classList.add('pesquisa-ativa'); //exibindo pesquisa
    bgMenu.classList.add('ativa');
    bgMenu.querySelectorAll('.background-menu, .menu-bg, .stars-menu, .planets-menu').forEach(el => el.classList.add('ativa'));
  } else {
    document.querySelector('.faixa').classList.remove('pesquisa-ativa');
    bgMenu.classList.remove('ativa');
    bgMenu.querySelectorAll('.background-menu, .menu-bg, .stars-menu, .planets-menu').forEach(el => el.classList.remove('ativa'));
    faixa.classList.remove('pesquisa-ativa');
  } 
} catch (erro) {
    mostrarPesquisa.innerHTML = `<p>Erro ao buscar na API. Tente novamente. </p>`;
    console.log(`Dados não disponível: ${erro}`);
  }
}
//enviarDados();

lupaPesquisa.addEventListener("click", () => {
  enviarDados();
});

campoPesquisa.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enviarDados();
  }
});

/* PORQUE A API NÃO TAVA FUNCIONANDO:
         o Node estava bloqueado de fazer conexões HTTPS externas, algo estava impedindo o acesso (pode ser o IPv6, proxy, firewall, ou bloqueio na porta 443). */
//primeira suspeita: bloqueamento no cors, servidor node rodando na porta 3000 e o live server rodando meu frontend na porta 5001, por isso dava conflito!