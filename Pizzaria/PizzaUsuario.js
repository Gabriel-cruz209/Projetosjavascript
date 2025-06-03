let carrinho = [];

function exibirMensagem(texto) {
    let msg = document.getElementById('mensagem');
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
    msg.textContent = texto;
}


function mostrarSecao(secao) {
    document.getElementById('menuu').classList.add('hidden');
    document.getElementById('carrinho').classList.add('hidden');
    document.getElementById('entrega').classList.add('hidden');

    document.getElementById(secao).classList.remove('hidden');
}


function mostrarLogin () {
    setTimeout(() => {
        window.location.href = "PizzaLogin.html"
    }, 1000);
}

function addPizza(pizza) {
    carrinho.push(pizza);
    atualizarCarrinho();
    exibirMensagem(`${carrinho.length} item(ns) no carrinho.`);
}


function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; 

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.onclick = () => {
            removerPizza(index);
        };
        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
    });
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    document.getElementById('total-carrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerPizza(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('menuu');
});

function FinalizarPedido() {
    if (carrinho.length === 0) {
        exibirMensagem('O carrinho está vazio. Adicione pizzas antes de finalizar o pedido.');
        return;
    }
    let total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    document.getElementById('text').innerHTML =`Pedido finalizado! Valor total: R$ ${total.toFixed(2)}. Obrigado pela compra!`
    carrinho = [];
    atualizarCarrinho();
    setTimeout(() => {
        mostrarSecao('entrega');
    }, 2000);
    document.getElementById('texto').innerHTML = '<strong>Pizza em Preparo...</strong>'
    setTimeout(() => {
        document.getElementById('texto').innerHTML = '<strong>Pizza em Entrega</strong>'
    }, 10000);
}

function entrega() {
    document.getElementById('texto').innerHTML = '<strong>Entrega Confirmada</strong>'
}

