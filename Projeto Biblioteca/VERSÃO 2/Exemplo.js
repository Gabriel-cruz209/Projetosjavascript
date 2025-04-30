
let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
    // Esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");

    // Mostra a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);

    if (titulo && autor && ano) {
        biblioteca.push({ titulo, autor, ano });

        // Limpa os campos do formulário
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";

        atualizarLista(); // Atualiza a lista completa
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function buscarLivro() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) =>
        livro.titulo.toLowerCase().includes(busca)
    );
    atualizarLista(resultados);
}

function atualizarLista(lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = ""; // Limpa a tabela antes de adicionar novos itens

    lista.forEach((livro) => {
        const linha = document.createElement("tr"); // Criando um novo elemento <tr>
        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
        `;
        tabela.appendChild(linha); // Adicionando a linha na tabela
    });
}
