let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
  
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
  
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
  
})

function enviarEmail() {
    // Exibe um alerta antes de enviar o formulário
    if (confirm("Tem certeza que deseja enviar este e-mail?")) {
        // Se o usuário confirmar, permite o envio
        return true;
    } else {
        // Se o usuário cancelar, impede o envio
        return false;
    }
}