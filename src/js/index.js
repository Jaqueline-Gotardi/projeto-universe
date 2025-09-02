 const formulario = document.getElementById('formulario');
 const campos = document.querySelectorAll('#formulario input');
 const mensagensErro = document.querySelectorAll('#formulario .mensagem-erro');

 formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        window.location.hash = 'tela2';
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