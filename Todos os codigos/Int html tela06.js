//01
let res = document.getElementById(`situaçao`)
res.innerHTML = `<p> Calculando a media final de <mark>${nome}</mark>.</p>`
res.innerHTML += `<p> As medias das notas foram <mark>${n1} e ${n2}</mark>.</p>`
res.innerHTML += `<p> A media final sera <mark>${med}</mark>.</p>`
res.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;'>${msg}</strong>.</p>`


//02
let contador = 0;
let resultado = document.getElementById('resultado')
function contar() {
   contador++
   resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p.`
}

function zerar(){
   contador = 0;
   resultado.innerHTML = `<p> O resultado foi zerado </p>`
}


function diminuir() {
   contador--
   resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p.`
}

//03
function calcidade() {
    let agora = new Date();
    let ano = agora.getFullYear();

    let nasc = Number(window.prompt(`Em que ano voce nasceu?`))
    let idade = ano - nasc;

    let saida = document.getElementById("idade");
    saida.innerHTML = `<p> Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}

//04
let contadorr = Number(window.prompt("Qual numero deseja ver o antes e depois"))
let resultadoo = document.getElementById('result')
function depois() {
   contadorr++
   resultadoo.innerHTML = `<p>Agora o contador está em <mark>${contadorr}</mark>.</p.`
}

function antes() {
   contadorr--
   resultadoo.innerHTML = `<p>Agora o contador está em <mark>${contadorr}</mark>.</p.`
}

//05
function calcular () {
    let nome = window.prompt("Qual o nome do produto")
    let preço = Number(window.prompt("Qual a preço do produto"))
    let valor = Number(window.prompt("Valor que o cliente pagou"))
    let troco = valor - preço
    let res = document.getElementById('msg')
    res.innerHTML =  `<p> O produto ${nome}custa R$${preço.toFixed(2)}</p>`
    res.innerHTML +=  `<p> O troco devera ser de ${troco} reais</p>`
    
    }
    