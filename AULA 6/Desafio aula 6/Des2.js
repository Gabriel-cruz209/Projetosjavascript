function idade () {
let nome = window.prompt("Qual o seu nome")
let idade = Number(window.prompt("Qual a sua idade"))
let id = document.getElementById('idad')
id.innerHTML =  `<p> O nome do usuario é ${nome} e possui ${idade} anos de idade.</p>`
}