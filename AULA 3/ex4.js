//desafio1
//fazer um algoritimo para separar numeros pares e impars


let num1= 10;
let num2 = 20;

let resultado = num1 + num2;
console.log(('resultado ')+ resultado);

let num = 3;
if (num %2 == 0){
    console.log('O numero ' + num + ' é par');
}
else {
    console.log('O numero ' + num + ' é impar');
}

//0 resto da divisão
//desafio2
//criar um algorismo para calcular valores com as expressoes:soma,menos,multipliucaçao,divisao

let numero = 4;
let numero2 = 5;
let conta = 1
if (conta == 1){
    let resul = numero + numero2;
    console.log('Resultado da soma é '+ resul)
}
else if (conta == 2){
    let resul = numero - numero2;
    console.log('O resultado da subtração é ' + resul)
}
else if ( conta == 3){
    let resul = numero * numero2;
    console.log('O resultado da multiplicação é ' + resul)
}
else {
    let resul = numero / numero2;
    console.log('O resultado da divisão é ' + resul)
}

// formula alternativa
let numer = 4;
let numer2 = 5;
let cont = 1
if (cont == 1){
    console.log('Resultado da soma é '+ (numer + numer2))
}

//formula alternativa
let numep = 4;
let numep2 = 5;
let con = 1
if (con == 1){
    console.log(`\n ${numep} + ${numep2} = ${numep + numep2}\n`)
}

//formula alternativa
let numm = 10;
let numm2 = 20;
let soma = numm + numm2;

let equacao = 'soma';
if (equacao == 'soma'){
    console.log("A soma foi " + soma)
}

//forma alternativa
let a = 10;
let b = 20;

let haysoma = a + b;
let haysub = a - b;
let haymult = a * b;
let haydiv = a / b;
console.log('resultado da soma ' + haysoma)
console.log('resultado da subtraçao ')
