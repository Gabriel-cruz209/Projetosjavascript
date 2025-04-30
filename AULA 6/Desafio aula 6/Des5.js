function convert () {
    let valor = Number(window.prompt("Quantos reais deseja converter"))
    let dolar = valor * 6
    let res = document.getElementById('com')
    res.innerHTML =  `<p> O valor de ${valor} em dolar ${dolar}</p>`
}