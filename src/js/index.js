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
/* const btnAvancar = document.getElementById("btn-primary");
const secoes = document.querySelectorAll(".secao");
let secaoAtual = 0;

secoes.forEach(secao => {
    secao.addEventListener("click", function() {
        if (secaoAtual === secoes.length -1) return;

        esconderSecaoSelecionada();

        secaoAtual++;
        mostrarSecao(secaoAtual);
    })
})

function mostrarSecao(secaoAtual) {
    secoes[secaoAtual].classList.add("selecionado");
}

function esconderSecaoSelecionada() {
    const secaoSelecionada = document.querySelector(".selecionado");
    secaoSelecionada.classList.remove("selecionado");
} */