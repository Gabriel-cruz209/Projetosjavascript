let pizzaria = []
let pizzaAlterar = null;

function mostrarSecao(secao) {
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('consulta').classList.add('hidden');
    document.getElementById('alterar').classList.add('hidden');
    document.getElementById('venda').classList.add('hidden');

    document.getElementById(secao).classList.remove('hidden');
}

function adicionarPizza (){
    const nome = document.getElementById('nome').value;
    const ingrediente = document.getElementById('ingrediente').value;
    const preço = document.getElementById('preco').value;

    if (titulo && autor && ano) {
        pizzaria.push({nome, ingrediente, preco});
        document,getElementById("nome").value = "";
        document,getElementById("ingrediente").value = "";
        document,getElementById("preco").value = "";
        atualizarLista();
        alert("Pizza adicionada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function buscarPizza () {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultado = pizzaria.filter((livro)=> livro.titulo.toLowerCase().includes(busca));
    atualizarLista(resultado);
}