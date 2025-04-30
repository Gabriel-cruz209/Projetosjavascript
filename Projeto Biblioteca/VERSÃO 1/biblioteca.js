let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o titulo do livro");
    let autor = prompt("Digite o autor do livro");
    let ano = parseInt(prompt("digite o ano de publicação do livro"));
    biblioteca.push({titulo, autor, ano});
    alert ("livro adicionado com sucesso")
}

// Length/forEach
function listarLivros() {
    if (biblioteca.length > 0) {
        let mensagem = "lista de livros na biblioteca:\n";
        biblioteca.forEach((livro) => {
            mensagem += `titulo: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`;
         });
         alert(mensagem);
    } 
    else {
        alert("A biblioteca está vazia")
    }
}

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1. Adicionar livro \n"+
        "2. Buscar Livro\n" +
        "3. Listar Livros\n" +
        "4. Sair\n" +
        "Escolha uma opção:"
    );
}

exibirMenu();
adicionarLivro();
listarLivros();