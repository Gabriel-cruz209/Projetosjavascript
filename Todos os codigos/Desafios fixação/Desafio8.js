// 8

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1. Básico\n"+
        "2. Medio\n" +
        "3. Pro\n" +
        "4. Sair\n" +
        "Escolha uma opção de streaming para comprar:"
    );
}
exibirMenu ();

let PlanoM = prompt("Qual plano você vai querer 1,2 ou 3")
let descrição = ""

    if (PlanoM == "1"){
        descrição = "Básico 29.99 por mês"
    }
    else if (PlanoM == "2") {
      
        descrição = "Médio 49.99 por mês"
    }
    else if (PlanoM == "3") {
      
        desçroção = "Pro 59.99 por mês"
    }
    else {
        descrição = "Opção invalida"
    }

    alert ("O seu plano é: "+ descrição)