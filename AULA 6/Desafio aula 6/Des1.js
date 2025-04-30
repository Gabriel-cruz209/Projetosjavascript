function bomdia () {
    let dia = window.prompt("Está de dia?")
    let  ia = document.getElementById('dia')
    ia.innerHTML = `<p> Hoje ${dia} está de dia</p>`
}
function boatarde () {
    let tarde = window.prompt("Está de tarde?")
    let ae = document.getElementById('tarde')
    ae.innerHTML = `<p> Hoje ${tarde} está de tarde</p>`
}
function boanoite () {
    let noite = window.prompt("Está de noite?")
    let ao = document.getElementById('noite')
    ao.innerHTML = `<p> Hoje ${noite} está de noite</p>`
}