let discos = [];

function adicionarDisco() {
    let titulo = prompt("Digite o titulo do disco");
    let artista = prompt("Digite o artista do disco");
    let ano = parseInt(prompt("digite o ano de publicação do disco"));
    let preco = parseFloat(prompt("digite o preço do disco"));
    discos.push({titulo, artista, ano, preco});
    alert ("disco adicionado com sucesso")
}

// Length/forEach
function listarDiscos() {
    if (discos.length > 0) {
        let mensagem = "lista de discos:\n";
        discos.forEach((disco) => {
            mensagem += `titulo: ${disco.titulo}, Autor: ${disco.artista}, Ano: ${disco.ano}, Preço${disco.preco}\n`;
         });
         alert(mensagem);
    } 
    else {
        alert("Nenhum disco encontrado")
    }
}

adicionarDisco();
listarDiscos();