let moveis = [];

function adicionarMoveis() {
    let tipo = prompt("Digite o tipo do movel");
    let material = prompt("Digite o material do movel");
    let cor = prompt("digite o cor do movel");
    let preco = parseFloat(prompt("digite o preço do movel"));
    moveis.push({tipo, material, cor, preco});
    alert ("movel adicionado com sucesso")
}

// Length/forEach
function listarMoveis() {
    if (moveis.length > 0) {
        let mensagem = "lista de moveis:\n";
        moveis.forEach((movel) => {
            mensagem += `titulo: ${movel.tipo}, Autor: ${movel.material}, Ano: ${movel.cor}, Preço${movel.preco}\n`;
         });
         alert(mensagem);
    } 
    else {
        alert("Nenhum movel encontrado")
    }
}

adicionarMoveis();
listarMoveis();