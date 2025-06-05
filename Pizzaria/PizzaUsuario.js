// Array para armazenar os itens adicionados ao carrinho
let carrinho = [];

// Função para exibir uma mensagem na tela
function exibirMensagem(texto) {
    let msg = document.getElementById('mensagem');
    // Se a div de mensagem não existir, cria uma nova
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'mensagem';
        msg.style.marginTop = '10px';
        msg.style.padding = '10px';
        msg.style.border = '1px solid #ccc';
        msg.style.borderRadius = '5px';
        msg.style.backgroundColor = '#f0f0f0';
        document.body.appendChild(msg);
    }
    // Exibe o texto da mensagem
    msg.textContent = texto;
}

// Função para mostrar apenas a seção desejada e ocultar as outras
function mostrarSecao(secao) {
    document.getElementById('menuu').classList.add('hidden');
    document.getElementById('carrinho').classList.add('hidden');
    document.getElementById('entrega').classList.add('hidden');

    // Remove a classe 'hidden' da seção que deve ser exibida
    document.getElementById(secao).classList.remove('hidden');
}

// Função para redirecionar para a página de login após 1 segundo
function mostrarLogin () {
    setTimeout(() => {
        window.location.href = "PizzaLogin.html"
    }, 1000);
}

// Função para adicionar uma pizza ao carrinho
function addPizza(pizza) {
    carrinho.push(pizza); // Adiciona o objeto pizza ao array carrinho
    atualizarCarrinho(); // Atualiza a exibição do carrinho
    exibirMensagem(`${carrinho.length} item(ns) no carrinho.`); // Mostra quantos itens estão no carrinho
}

// Função para atualizar a lista de itens do carrinho na interface
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; // Limpa o conteúdo atual da lista

    // Percorre cada item no carrinho e cria um elemento <li> para ele
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        // Cria um botão para remover o item do carrinho
        const Remover = document.createElement('button');
        Remover.textContent = 'Remover';
        Remover.style.marginLeft = '10px';

        // Define a função de clique para remover o item
        Remover.onclick = () => {
            removerPizza(index);
        };

        li.appendChild(Remover); // Adiciona o botão ao <li>
        listaCarrinho.appendChild(li); // Adiciona o <li> à lista do carrinho
    });

    // Calcula o total do carrinho e atualiza na interface
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    document.getElementById('total-carrinho').innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho pelo índice
function removerPizza(index) {
    carrinho.splice(index, 1); // Remove o item da posição 'index'
    atualizarCarrinho(); // Atualiza a exibição do carrinho
}

// Evento que ocorre quando o conteúdo da página foi completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('menuu'); // Mostra a seção do menu inicialmente
});

// Função para finalizar o pedido
function FinalizarPedido() {
    // Se o carrinho estiver vazio, exibe uma mensagem e encerra a função
    if (carrinho.length === 0) {
        exibirMensagem('O carrinho está vazio. Adicione pizzas antes de finalizar o pedido.');
        return;
    }

    // Calcula o total do pedido
    let total = carrinho.reduce((soma, item) => soma + item.preco, 0);

    // Exibe uma mensagem de pedido finalizado com o total
    document.getElementById('text').innerHTML = `Pedido finalizado! Valor total: R$ ${total.toFixed(2)}. Obrigado pela compra!`;

    // Esvazia o carrinho
    carrinho = [];
    atualizarCarrinho(); // Atualiza a exibição

    // Após 2 segundos, mostra a seção de entrega
    setTimeout(() => {
        mostrarSecao('entrega');
    }, 5000);

    // Atualiza o status da entrega na interface
    document.getElementById('texto').innerHTML = '<strong>Pizza em Preparo...</strong>';

    // Após 10 segundos, atualiza o status para "Pizza em Entrega"
    setTimeout(() => {
        document.getElementById('texto').innerHTML = '<strong>Pizza em Entrega</strong>';
    }, 5000);
}

// Função que confirma a entrega na interface
function entrega() {
    document.getElementById('texto').innerHTML = '<strong>Entrega Confirmada</strong>';
}

