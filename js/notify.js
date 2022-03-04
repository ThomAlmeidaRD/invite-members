// botão da tela de convidar (add-user)
var invite_button_reload = document.getElementById('invite-btn-reload')

//notificações // botao de fechar notificação
var notify = document.getElementById('notify');
var close = document.getElementById('close-notify')


invite_button_reload.addEventListener('click', function() {
    notify.style.display = 'flex'
})


close.addEventListener('click', function() {
    //fechar notificação
    notify.style.display = 'none'
    window.location.href = 'index.html'
})