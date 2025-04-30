let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
    // Esconde todas as seçoes
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    // document.getElementById("alterar").classList.add("hidden");

    //Mostrar a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);

    if (titulo && autor && ano) {
        biblioteca.push({titulo,autor,ano});
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value  = "";
        document.getElementById("ano").value  = "";
        atualizarLista();
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.")
    }

}

function buscarLivros() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) => livro.titulo.toLowerCase().includes(busca));
    atualizarLista(resultados);
}

function atualizarLista (lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = "";

    lista.forEach((livro) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        `;
        tabela.appendChild(linha);
    });
}
