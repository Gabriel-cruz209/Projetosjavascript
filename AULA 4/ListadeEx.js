//crie um algoritimo que imprima 11 vezes a palavra ola mundo

let mundo = ["Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo", "Ola Mundo"]
for (let i = 0; i < mundo.length; i++ ) {
    console.log(mundo[i])
}

for (let i = 11; i >= 0; i--){
    console.log("Olá Mundo");

}

//Tabuada de um numero 2


for (l = 1; l <= 10; l++ ){ 
    console.log(`2 x ${l} = ${2 * l}`);
}


//soma dos numeros impares do 1 ao 100

let soma = 0;
for ( let i = 1; i <= 100; i++) {
    if ( i % 2 === 1)
    soma += i ;
}

console.log(soma);


//contagem regresiva de 10 a 1 e que apareça no final "feliz ano novo"

let i = 10;
while (i > 0){
    console.log(i);
    i--;
} console.log("Feliz Ano Novo")

// 1 Verificação de categoria de idade

let idade = 19;
if (idade <= 11){
    console.log('Criança');
}
else if (idade = 12 && idade <= 17){
    console.log('Adolecente');
}
else if (idade = 18 && idade <= 59){
    console.log('Adulto');
}
else {
    console.log('Idoso')
}


// 2 Verificação de nota com mensagem

let not = 100;
if (not >= 90){
    console.log('excelente')
}
else if (not >= 80){
    console.log('bom')
}
else if (not >= 70){
    console.log('legal')
}
else if (not >= 60){
    console.log('melhorando')
}
else if (not >= 50){
    console.log('basico')
}
else if (not >= 40){
    console.log('abaixo do basico')
}
else if (not >= 30){
    console.log('Poderia ser melhor')
}
else if (not >= 20){
    console.log('Esforce-se mais')
}
else if (not >= 10){
    console.log('ruim')
}
else {
    console.log("Muito ruim")
}

// 3 Verificação do dia da semana

let diass = ('domingo');
if (diass === ('domingo')){
    console.log('Domingo:Descanso')
}
else if (diass === ('segunda-feira')){
    console.log('Segunda:trabalho')
}
else if (diass === ('terça-feira')){
    console.log('Terça:Academia')
}
else if (diass === ('quarta-feira')){
    console.log('Quarta:fazer a janta')
}
else if (diass === ('quinta-feira')){
    console.log('Quinta:Cinema')
}
else if (diass === ('sexta-feira')){
    console.log('Sexta:academia denovo')
}
else {
    console.log('Sabado:Rolezinho com os amigos')
}

// 4 Verificação do horario do dia

let hora = 19;
if (hora < 12){
    console.log('bom dia ')
}
else if (hora = 12 && hora <= 18){
    console.log('boa tarde')
}
else {
    console.log('boa noite')
}

// 5 Verificação do peso ideal

let peso = 19;
if (peso < 45){
    console.log('Abaixo do peso ')
}
else if (peso= 50 && peso <= 90){
    console.log('Dentro do peso')
}
else {
    console.log('Acima do Peso')
}

// 6 Verificação de numero primo

let num = 8;
if (num %2 == 1){
    console.log('O numero ' + num + ' é impar');
}
else {
    console.log('O numero ' + num + ' não é impar');
}

// 7 Verificação de um ano bisexto

let numero = 2024;
if (numero %4 === 0 ){
    console.log(`O ano de ${numero} é bissexto`)
}
else {
    console.log(`O ano de ${numero} não é bissexto`)
}

// 8 Verificação de Nota com Mensagem Personalizada

let n = 100;
if (n >= 90){
    console.log('excelente')
}
else if (n >= 80){
    console.log('bom')
}
else if (n >= 70){
    console.log('legal')
}
else if (n >= 60){
    console.log('melhorando')
}
else if (n >= 50){
    console.log('basico')
}
else if (n >= 40){
    console.log('abaixo do basico')
}
else if (n >= 30){
    console.log('Poderia ser melhor')
}
else if (n >= 20){
    console.log('Esforce-se mais')
}
else if (n >= 10){
    console.log('ruim')
}
else {
    console.log("Muito ruim")
}

// 9 Verificação de Temperatura com Mensagem

let temp = 40;
if (temp < 20) {
    console.log('frio')
}
else if (temp = 21 && temp <= 35){ 
    console.log("temperatura média")
}
else{
    console.log('Calor')
}

// 10 Verificação de Desempenho de Vendas

let Vendas = 20;
if (Vendas < 25){
    console.log('Vendas baixas ')
}
else if (Vendas = 25 && Vendas <= 50){
    console.log('Vendas na média')
}
else {
    console.log('Vendas altas')
}
