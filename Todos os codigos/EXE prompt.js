// Mercado

function calcular(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma
} 

let numeros = [];
let quantidade = parseInt(prompt("Quantos produtos deseja somar:"));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o valor ${i+ 1}:`));
    numeros.push(numero);
}

let som = calcular(numeros);
alert(`A soma é: ${som}`)