'use strict'

// input da tela inicial (index)
var invite_email = document.getElementById('email')

// input da tela de convidar (add-user)
var invite_email_reload = document.getElementById('email-reload')

// botão da tela inicial (index)
var invite_button = document.getElementById('invite-btn')


//fazendo com que o valor do input seja capturado
invite_button.addEventListener('click', function() {

    //tratamento simples de campos nulos

    if (invite_email.value == '') {
        //error msg
        alert('campo vazio!')
    } else {
        // capturar valor
        window.location.href = 'invite.html?' + invite_email.value
    }

})


function getEmail() {
    //recuperar email vindo da url
    var new_url = window.location.href
    var formated_url = new_url.substring(new_url.indexOf('?') + 1)
    invite_email_reload.value = formated_url
}