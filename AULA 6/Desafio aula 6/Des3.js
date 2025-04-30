let contador = Number(window.prompt("Qual numero deseja ver o antes e depois"))
let resultado = document.getElementById('result')
function depois() {
   contador++
   resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p.`
}

function antes() {
   contador--
   resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p.`
}