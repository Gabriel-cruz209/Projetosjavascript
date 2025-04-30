let nome = window.prompt(`Qual é o nome do aluno`)
let n1 =Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
let n2 = Number(window.prompt(`Alem de ${n1}, qual foi a outra nota de ${nome}?`))
med = (n1 + n1)/2

let msg //Cria uma variavel e deixe ela vazia
if(med>= 6) { // se por acaso a media for 6 ou mais..
    msg = 'meus parabens'
}
else { // senão ..
    msg = 'Estude um pouco mais!'
}

let res = document.getElementById(`situaçao`)
res.innerHTML = `<p> Calculando a media final de <mark>${nome}</mark>.</p>`
res.innerHTML += `<p> As medias das notas foram <mark>${n1} e ${n2}</mark>.</p>`
res.innerHTML += `<p> A media final sera <mark>${med}</mark>.</p>`
res.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;'>${msg}</strong>.</p>`