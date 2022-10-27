/*
Case Sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

function validaNome(){
    console.log(nome.value.length)

    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 2){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        txtNome.style.marginLeft = "6rem"
        txtNome.style.marginTop = "1rem"
        txtNome.style.fontFamily = "Arial, Helvetica, sans-serif"
    }else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        txtNome.style.marginLeft = "6rem"
        txtNome.style.marginTop = "1rem"
        txtNome.style.fontFamily = "Arial, Helvetica, sans-serif"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(mail.value.indexOf("@" && ".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
        txtEmail.style.marginLeft = "6rem"
        txtEmail.style.marginTop = "1rem"
        txtEmail.style.fontFamily = "Arial, Helvetica, sans-serif"
    }else{
        txtEmail.innerHTML = "Email Válido!"
        txtEmail.style.color = "green"
        txtEmail.style.marginLeft = "6rem"
        txtEmail.style.marginTop = "1rem"
        txtEmail.style.fontFamily = "Arial, Helvetica, sans-serif"
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector("#txtMensagem")

    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "Máximo: 100 caractéres"
        txtMensagem.style.color = "red"
        txtMensagem.style.marginLeft = "6rem"
        txtMensagem.style.marginTop = "1rem"
        txtMensagem.style.fontFamily = "Arial, Helvetica, sans-serif"
        txtMensagem.style.display = "block"
    }else{
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}


function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = "800px";
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "500px";
    mapa.style.height = "300px"
}