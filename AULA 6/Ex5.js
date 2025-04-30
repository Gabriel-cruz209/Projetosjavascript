
function valoo () {
    let preço = Number(window.prompt("Qual o preço do produto"))
let porc = Number(window.prompt("Qual a porcentagem de desconto"))
let valor =( preço*porc)/ 100
let total = preço - valor
let res = document.getElementById('result')
res.innerHTML =  `<p> O produto custa r$${preço.toFixed(2)}</p>`
res.innerHTML +=  `<p> Um desconto de r$${porc}% sobre ele sera de R${valor.toFixed(2)}</p>`
res.innerHTML +=  `<p> O valor final a ser pago sera de r$${total.toFixed(2)}</p>`
}