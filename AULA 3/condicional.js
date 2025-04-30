// 7

alert ("Preço do ingresso Inteiro = 10\n" + "Preço do ingresso meia = 5")

function calcular(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma
} 

let numeros = [];
let quantidade = parseInt(prompt("Quantos ingressos deseja comprar:"));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o valor dos ingressos ${i+ 1}:`));
    numeros.push(numero);
}

let som = calcular(numeros);
alert(`O total dos ingressos é: ${som}`)
