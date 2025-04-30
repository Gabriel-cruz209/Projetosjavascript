// 3

function verificar(){
    let idade = parseInt(prompt("Quantos anos você tem?"))
    if ( idade >= 16) {
        alert ("Você pode votar pela sua idade");
    }
    else {
        alert ("Você não pode votar pela sua idade");
    }
}

verificar ();

function nacionali(){
    let nacionalidade = prompt("Qual a sua nacionalidade?")
    if (nacionalidade == "brasileiro") {
        alert ("Você pode votar pela sua nacionalidade")
    }
    else {
        alert ("Você não pode votar pela sua nacionalidade")
    }
}
nacionali ();