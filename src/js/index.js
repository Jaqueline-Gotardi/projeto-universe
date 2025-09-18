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
const btnFenix = document.getElementById('btn-fenix');
const btnVoltarFenix = document.getElementById('btn-voltar-fenix');
const btnCentauro = document.getElementById('btn-centauro');
const btnVoltarCentauro = document.getElementById('btn-voltar-centauro');
const btnVoltarConstelacaoSul = document.getElementById('btn-voltar-constelacao-sul');
const btnHemisferioPrincipal = document.getElementById('hemisferio-principal');
const btnOrion = document.getElementById('btn-orion');
const btnVoltarOrion = document.getElementById('btn-voltar-orion');
const btnCaoMaior = document.getElementById('btn-cao-maior');
const btnVoltarCaoMaior = document.getElementById('btn-voltar-cao-maior');
const btnEscorpiao = document.getElementById('btn-escorpiao');
const btnVoltarEscorpiao = document.getElementById('btn-voltar-escorpiao');
const btnVoltarConstelacoesFamosas = document.getElementById('btn-voltar-constelacoes-famosas');
const btnVoltarConstelacoes = document.getElementById('btn-voltar-constelacoes');
const btnEventosAstronomicos = document.getElementById('btn-eventos-astronomicos');
const btnEclipses = document.getElementById('eclipses');
const btnEclipseSolar = document.getElementById('btn-eclipse-solar');
const btnVoltarEclipseSolar = document.getElementById('btn-voltar-eclipse-solar');
const btnEclipseLunar = document.getElementById('btn-eclipse-lunar');
const btnVoltarEclipseLunar = document.getElementById('btn-voltar-eclipse-lunar');
const btnVoltarEclipses = document.getElementById('btn-voltar-eclipses');
const btnChuvaDeMeteoros = document.getElementById('chuva-de-meteoros');
const btnPerseidas = document.getElementById('btn-perseidas');
const btnVoltarPerseida = document.getElementById('btn-voltar-perseida'); 
const btnLeonideas = document.getElementById('btn-leonideas');
const btnVoltarLeonidea = document.getElementById('btn-voltar-leonidea');
const btnGeminideas = document.getElementById('btn-geminideas');
const btnVoltarGeminidea = document.getElementById('btn-voltar-geminidea');
const btnVoltarChuvaDeMeteoros = document.getElementById('btn-voltar-chuva-de-meteoros');
const btnSuperLuasEConjuncoes = document.getElementById('superluas-e-conjuncoes');
const btnSuperLua = document.getElementById('btn-superlua');
const btnVoltarSuperLua = document.getElementById('btn-voltar-superlua');
const btnConjuncaoPlanetaria = document.getElementById('btn-conjuncao-planetaria');
const btnVoltarConjuncaoPlanetaria = document.getElementById('btn-voltar-conjuncao-planetaria');
const btnVoltarSuperluasEConjuncoes = document.getElementById('btn-voltar-superluas-e-conjuncoes');
const btnCometasEOutros = document.getElementById('cometas-e-outros');
const btnCometas = document.getElementById('btn-cometas');
const btnVoltarCometas = document.getElementById('btn-voltar-cometas');
const btnSupernovas = document.getElementById('btn-supernovas');
const btnVoltarSupernovas = document.getElementById('btn-voltar-supernovas');
const btnAgrupamentosEstrelares = document.getElementById('btn-agrupamentos-estrelares');
const btnVoltarAgrupamentos = document.getElementById('btn-voltar-agrupamentos');
const btnVoltarCometasEOutros = document.getElementById('btn-voltar-cometas-e-outros');
const btnVoltarEventosAstronomicos = document.getElementById('btn-voltar-eventos-astronomicos');
const btnGalaxias = document.getElementById('btn-galaxias');
const btnTiposDeGalaxia = document.getElementById('tipos-de-galaxias');
const btnEspiral = document.getElementById('btn-espiral');
const btnVoltarEspiral = document.getElementById('btn-voltar-espiral');

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
const detalheFenix = document.getElementById('detalhe-fenix');
const detalheCentauro = document.getElementById('detalhe-centauro');
const constelacoesFamosas = document.getElementById('constelacoes-famosas');
const detalheOrion = document.getElementById('detalhe-orion');
const detalheCaoMaior = document.getElementById('detalhe-cao-maior');
const detalheEscorpiao =document.getElementById('detalhe-escorpiao');
const telaEventosAstronomicos = document.getElementById('tela-eventos-astronomicos');
const listaEclipses = document.getElementById('lista-eclipses');
const detalheEclipseSolar = document.getElementById('detalhe-eclipse-solar');
const detalheEclipseLunar = document.getElementById('detalhe-eclipse-lunar');
const listaChuvaDeMeteoros = document.getElementById('lista-chuvas-de-meteoros');
const detalhePerseidas = document.getElementById('detalhe-perseidas');
const detalheLeonideas = document.getElementById('detalhe-leonideas');
const detalheGeminideas = document.getElementById('detalhe-geminideas');
const listaSuperLuasEConjuncoes = document.getElementById('lista-superluas-conjuncoes');
const detalheSuperLua = document.getElementById('detalhe-superlua');
const detalheConjuncaoPlanetaria = document.getElementById('detalhe-conjuncao');
const listaCometasEOutros = document.getElementById('lista-cometas-outros');
const detalheCometas = document.getElementById('detalhe-cometas');
const detalheSupernovas = document.getElementById('detalhe-supernovas');
const detalheAgrupamentosEstrelares = document.getElementById('detalhe-agrupamentos');
const telaGalaxias = document.getElementById('tela-galaxias');
const listaTiposDeGalaxias = document.getElementById('lista-tipos-galaxias');
const detalheEspiral = document.getElementById('detalhe-espiral');


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

    btnFenix.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheFenix.classList.add('selecionado');
    });

    btnVoltarFenix.addEventListener('click', (event) => {
        detalheFenix.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnCentauro.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheCentauro.classList.add('selecionado');
    });

    btnVoltarCentauro.addEventListener('click', (event) => {
        detalheCentauro.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnVoltarConstelacaoSul.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });
    
    btnHemisferioPrincipal.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnOrion.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheOrion.classList.add('selecionado');
    });

    btnVoltarOrion.addEventListener('click', (event) => {
        detalheOrion.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnCaoMaior.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheCaoMaior.classList.add('selecionado');
    });

    btnVoltarCaoMaior.addEventListener('click', (event) => {
        detalheCaoMaior.classList.remove('selecionado')
        constelacoesFamosas.classList.add('selecionado');
    });

    btnEscorpiao.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheEscorpiao.classList.add('selecionado');
    });

    btnVoltarEscorpiao.addEventListener('click', (event) => {
        detalheEscorpiao.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnVoltarConstelacoesFamosas.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnVoltarConstelacoes.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });

    btnEventosAstronomicos.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnEclipses.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnEclipseSolar.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado');
        detalheEclipseSolar.classList.add('selecionado');
    });

    btnVoltarEclipseSolar.addEventListener('click', (event) => {
        detalheEclipseSolar.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnEclipseLunar.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado')
        detalheEclipseLunar.classList.add('selecionado');
    });

    btnVoltarEclipseLunar.addEventListener('click', (event) => {
        detalheEclipseLunar.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnVoltarEclipses.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnChuvaDeMeteoros.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnPerseidas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalhePerseidas.classList.add('selecionado');
    });

    btnVoltarPerseida.addEventListener('click', (event) => {
        detalhePerseidas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnLeonideas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalheLeonideas.classList.add('selecionado');
    });

    btnVoltarLeonidea.addEventListener('click', (event) => {
        detalheLeonideas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnGeminideas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalheGeminideas.classList.add('selecionado');
    });

    btnVoltarGeminidea.addEventListener('click', (event) => {
        detalheGeminideas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnVoltarChuvaDeMeteoros.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnSuperLuasEConjuncoes.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnSuperLua.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        detalheSuperLua.classList.add('selecionado');
    });

    btnVoltarSuperLua.addEventListener('click', (event) => {
        detalheSuperLua.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnConjuncaoPlanetaria.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        detalheConjuncaoPlanetaria.classList.add('selecionado');
    });

    btnVoltarConjuncaoPlanetaria.addEventListener('click', (event) => {
        detalheConjuncaoPlanetaria.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnVoltarSuperluasEConjuncoes.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnCometasEOutros.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnCometas.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheCometas.classList.add('selecionado');    
    });

    btnVoltarCometas.addEventListener('click', (event) => {
        detalheCometas.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnSupernovas.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheSupernovas.classList.add('selecionado');
    });

    btnVoltarSupernovas.addEventListener('click', (event) => {
        detalheSupernovas.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnAgrupamentosEstrelares.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheAgrupamentosEstrelares.classList.add('selecionado');
    });

    btnVoltarAgrupamentos.addEventListener('click', (event) => {
        detalheAgrupamentosEstrelares.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnVoltarCometasEOutros.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });
    
    btnVoltarEventosAstronomicos.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });

    btnGalaxias.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaGalaxias.classList.add('selecionado');
    });

    btnTiposDeGalaxia.addEventListener('click', (event) => {
        telaGalaxias.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });

    btnEspiral.addEventListener('click', (event) => {
        listaTiposDeGalaxias.classList.remove('selecionado');
        detalheEspiral.classList.add('selecionado');
    });

    btnVoltarEspiral.addEventListener('click', (event) => {
        detalheEspiral.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });


/* function mostrarSecao(secaoAtual) {
    secoes[secaoAtual].classList.add("selecionado");
}

function esconderSecaoSelecionada() {
    const secaoSelecionada = document.querySelector(".selecionado");
    secaoSelecionada.classList.remove("selecionado");
} */