function calcular () {
let nome = window.prompt("Qual o nome do produto")
let preço = Number(window.prompt("Qual a preço do produto"))
let valor = Number(window.prompt("Valor que o cliente pagou"))
let troco = valor - preço
let res = document.getElementById('msg')
res.innerHTML =  `<p> O produto ${nome}custa R$${preço.toFixed(2)}</p>`
res.innerHTML +=  `<p> O troco devera ser de ${troco} reais</p>`

}