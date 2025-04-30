function calcularMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}

let numeros = [];
let quantidade = parseInt(prompt("Quantos numeros você deseja inserir:"));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o numero ${i+ 1}:`));
    numeros.push(numero);
}

let media = calcularMedia(numeros);
alert(`A media é ${media}`);