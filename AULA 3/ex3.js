//condicionais com if else e else if
let nota = 70;
if (nota >= 80) {
    console.log('Parabens voce foi aprovado(a)');
}
else if ( nota < 80 && nota >= 60 ) {
    console.log('voce esta na nossa lista de espera')
}
else {
    console.log('Voce foi reprovado(a)')
}

// & = significa que necessita das duas condiçoes verdadeiras / como um meio termo

//vacinar 15 /60
let vacina = 60;
if (vacina >= 60){
    console.log('pode vacinar')
}
else if (vacina = 60 && vacina >= 15 ){
    console.log('lista de espera')
}
else {
    console.log('Nao pode vacinar')

}

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
else {
    console.log('RUIM D+')
}

//hora 
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

//dias da semana
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
    console.log('Rolezinho com os amigos')
}

