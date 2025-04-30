const numeros = require("readline"); //armazenar de forma constante

// resultado das linhas que vamos inserir
const num = numeros.createInterface({
    input : process.stdin,
    output : process.stdout,
})

num.question("Digite o primeiro numero : ", (num1) => {
    num.question("Digite o segundo numero : ", (num2) => {
        num.question("Digite o terceiro numero: ", (num3) => {
            num.question("Digite o quarto numero: ", (num4) => {
                let soma = Number(num1) + Number(num2) + Number(num3) + Number(num4);
                console.log(`A soma dos numeros são : ${soma}`);
                num.close();
            });
        });
    });
});