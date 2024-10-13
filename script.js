const nome = document.querySelector('#nome')
const senha = document.querySelector('#senha')
const p_msg_nome = document.querySelector('#msg_nome')
const p_msg_senha = document.querySelector('#msg_senha')

document.querySelector('#btn_entrar').addEventListener('click', (evt) => {
    evt.preventDefault()
    let msg_nome = null, msg_senha = null

    if(!nome.checkValidity()) {
        p_msg_nome.innerHTML = nome.validationMessage
    }else {
        p_msg_nome.innerHTML = ''
    }


    if(!senha.checkValidity()) {
        p_msg_senha.innerHTML = senha.validationMessage
    }else {
        p_msg_senha.innerHTML = ''
    }
})