// 1
 
function verificar(){
    let idade = parseInt(prompt("Quantos anos você tem?"))
    if ( idade > 18) {
        alert ("Você é maior de idade e pode ser habilitado");
    }
    else {
        alert ("Você é menor de idade você não é habilitado");
    }
}

verificar ();