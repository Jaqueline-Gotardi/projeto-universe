/* VALIDANDO FORMULÁRIO */
const formulario = document.getElementById('formulario');
 const campos = document.querySelectorAll('#formulario input');
 const mensagensErro = document.querySelectorAll('#formulario .mensagem-erro');

 formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        window.location.hash = 'tela-principal';
    }
 });

 function validarFormulario() {
    let isFormularioValido = true; 
    campos.forEach((input, index) => {
        if(input.value.trim() === '') {
            input.classList.add('erro'); 
            input.classList.remove('certo');
            mensagensErro[index].classList.add('ativo');
            isFormularioValido = false;
        } else {
            input.classList.add('certo');
            input.classList.remove('erro');
            mensagensErro[index].classList.remove('ativo');
        }   
    }); 
    return isFormularioValido;
 };




/*  TROCANDO AS TELAS AO CLICK DOS BOTÕES */
const botaoEntrar = document.querySelector('.btn-primary');
const btnIniciarExploracao = document.getElementById('btn-iniciar-exploracao');
const btnHomeDoMenu = document.getElementById('home-do-menu');
const btnTutorial = document.getElementById('btn-tutorial');
const iniciarExploracao = document.getElementById('iniciar-exploracao');
const btnMenu = document.getElementById('btn-menu');
const btnInformacoesAstronomicas = document.getElementById('btn-informacoes-astronomicas');
const btnConstelacoes = document.getElementById('btn-constelacoes');
const btnHemisferioNorte = document.getElementById('hemisferio-norte');
const btnUrsaMaior = document.getElementById('btn-ursa-maior');
const btnVoltarUrsaMaior = document.getElementById('btn-voltar-ursa-maior');
const btnUrsaMenor = document.getElementById('btn-ursa-menor');
const btnVoltarUrsaMenor = document.getElementById('btn-voltar-ursa-menor');
const btnAndromeda = document.getElementById('btn-andromeda');
const btnVoltarAndromeda = document.getElementById('btn-voltar-andromeda');
const btnVoltarConstelacaoNorte = document.getElementById('btn-voltar-constelacao-norte');
const btnHemisferioSul = document.getElementById('hemisferio-sul');
const btnCruzeiroDoSul = document.getElementById('btn-cruzeiro-do-sul');
const btnVoltarCruzeiroDoSul = document.getElementById('btn-voltar-cruzeiro-do-sul');

const telaLogin = document.getElementById('tela-login');
const telaApresentacao = document.getElementById('tela-principal-inicial');
const telaMenu = document.getElementById('menu');
const telaTutorial = document.getElementById('tela-tutorial');
const informacoesDoMenu = document.getElementById('informacoes-do-menu');
const telaInfoAstros = document.getElementById('tela-info-astros');
const telaConstelacoes = document.getElementById('tela-constelacoes');
const constelacoesDoNorte = document.getElementById('constelacoes-norte');
const detalheUrsaMaior = document.getElementById('detalhe-ursa-maior');
const detalheUrsaMenor = document.getElementById('detalhe-ursa-menor');
const detalheAndromeda = document.getElementById('detalhe-andromeda');
const constelacoesDoSul = document.getElementById('constelacoes-sul');
const detalheCruzeiroDoSul = document.getElementById('detalhe-cruzeiro-do-sul');

    botaoEntrar.addEventListener('click', (event) => {
        event.preventDefault();

        const podeProsseguir = validarFormulario();

        if (podeProsseguir) {
            alert("Login feito com sucesso. Bem vindo(a) explorador! 🛸💜✨");
            telaLogin.classList.remove('selecionado');
            telaApresentacao.classList.add('selecionado');
        } else {
            alert("Faça seu login! 🛸");
        }
    });
    
    btnIniciarExploracao.addEventListener('click', (event) => {
        event.preventDefault();
            telaApresentacao.classList.remove('selecionado');
            telaMenu.classList.add('selecionado');
    });

    btnHomeDoMenu.addEventListener('click', (event) => {
        event.preventDefault();
        telaMenu.classList.remove('selecionado');
        telaApresentacao.classList.add('selecionado');
    });

    btnTutorial.addEventListener('click', (event) => {
        event.preventDefault();
        telaApresentacao.classList.remove('selecionado');
        telaTutorial.classList.add('selecionado');
    });

    iniciarExploracao.addEventListener('click', (event) => {
        telaTutorial.classList.remove('selecionado');
        telaMenu.classList.add('selecionado');
    });

    btnMenu.addEventListener('click', (event) => {
        telaMenu.classList.remove('selecionado');
        informacoesDoMenu.classList.add('selecionado');
    });

    btnInformacoesAstronomicas.addEventListener('click', (event) => {
        informacoesDoMenu.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });
    
    btnConstelacoes.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnHemisferioNorte.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnUrsaMaior.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheUrsaMaior.classList.add('selecionado');
    });

    btnVoltarUrsaMaior.addEventListener('click', (event) => {
        detalheUrsaMaior.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnUrsaMenor.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheUrsaMenor.classList.add('selecionado');
    });

    btnVoltarUrsaMenor.addEventListener('click', (event) => {
        detalheUrsaMenor.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnAndromeda.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheAndromeda.classList.add('selecionado');
    });

    btnVoltarAndromeda.addEventListener('click', (event) => {
        detalheAndromeda.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnVoltarConstelacaoNorte.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnHemisferioSul.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnCruzeiroDoSul.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheCruzeiroDoSul.classList.add('selecionado');
    });

    btnVoltarCruzeiroDoSul.addEventListener('click', (event) => {
        detalheCruzeiroDoSul.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    

        


/* function mostrarSecao(secaoAtual) {
    secoes[secaoAtual].classList.add("selecionado");
}

function esconderSecaoSelecionada() {
    const secaoSelecionada = document.querySelector(".selecionado");
    secaoSelecionada.classList.remove("selecionado");
} */