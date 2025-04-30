//contagem regresiva de 10 a 1 e que apareça no final "feliz ano novo"
let i = 10;
while (i > 0){
    console.log(i);
    i--;
} console.log("Feliz Ano Novo")


//soma dos numeros impares do 1 ao 100
let soma = 0;
for ( let i = 1; i <= 100; i++) {
    if ( i % 2 === 1)
    soma += i ;
}

console.log(soma);


//TABUADA de um numero 2
for (l = 1; l <= 10; l++ ){ 
    console.log(`2 x ${l} = ${2 * l}`);
}


//crie um algoritimo que IMPRIMA 11 vezes a palavra ola mundo
let mundo = ["Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo"]
for (let i = 0; i < mundo.length; i++ ) {
    console.log(mundo[i])
}

for (let i = 11; i >= 0; i--){
    console.log("Olá Mundo");

}


// iterar sobre um ARRAY
//arrary= []

let frutas = ["maça", "banana", "laranja"];
for ( let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

let jogos = ["Valorant", "CS2", "LOL", "Baldurs Gate 3", "Elden Ring", "Cyberpunk"];
for ( let i = 0; i < jogos.length; i++) {
    console.log(jogos[i])
}

let times = ["corinthias", "flamengo", "santos", "bota fogo", "são paulo"];
for ( let i = 0; i < times.length; i++){
    console.log(times[i])
}

// imprimir numeros pares de  1 a 20 

for (let i = 2; i <= 30; i++) {
    if ( i % 2 === 0) {
        console.log(i);
    }
}

//calcular a soma de numeros

let somaa = 0;
for ( let i = 1; i <= 100; i++) {
    soma += i ;
}
console.log(somaa);

// calcular o fatorial de um numero fornecido pelo usuário

 let numero = 5;
 numero = Number(numero);

 let fatorial = 1;
 for (let i = 1; i <= numero; i++) {
    fatorial *= i;
 }

console.log(`O fatorial ${numero} é ${fatorial}.`)
