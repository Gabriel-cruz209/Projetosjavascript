// Dados das pizzas
const pizzas = [
    {
        id: 1,
        name: "Calabresa",
        ingredients: "Molho de tomate, mussarela, calabresa, cebola e orégano",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tradicionais"
    },
    {
        id: 2,
        name: "Margherita",
        ingredients: "Molho de tomate, mussarela, tomate, manjericão e azeite",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tradicionais"
    },
    {
        id: 3,
        name: "Frango com Catupiry",
        ingredients: "Molho de tomate, mussarela, frango desfiado e catupiry",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tradicionais"
    },
    {
        id: 4,
        name: "Portuguesa",
        ingredients: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona e pimentão",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "especiais"
    },
    {
        id: 5,
        name: "Quatro Queijos",
        ingredients: "Molho de tomate, mussarela, provolone, parmesão e gorgonzola",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1593504049359-24d77c1f7ac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "especiais"
    },
    {
        id: 6,
        name: "Pepperoni",
        ingredients: "Molho de tomate, mussarela e pepperoni",
        price: 58.00,
        image: "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "especiais"
    },
    {
        id: 7,
        name: "Chocolate com Morango",
        ingredients: "Chocolate ao leite, morangos frescos e leite condensado",
        price: 48.00,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "doces"
    },
    {
        id: 8,
        name: "Romeu e Julieta",
        ingredients: "Goiabada cremosa e queijo mussarela",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1632818924360-68f6d6cbf7fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "doces"
    }
];

// Carrinho de compras
let cart = [];

// Elementos do DOM
const pizzaGrid = document.querySelector('.pizza-grid');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total span');
const cartCount = document.querySelector('.cart-count');
const categoryButtons = document.querySelectorAll('.menu-categories button');
const checkoutBtn = document.querySelector('.checkout-btn');

// Exibir pizzas no cardápio
function displayPizzas(category = 'todos') {
    pizzaGrid.innerHTML = '';
    
    let filteredPizzas = pizzas;
    
    if (category !== 'todos') {
        filteredPizzas = pizzas.filter(pizza => pizza.category === category);
    }
    
    filteredPizzas.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza-card');
        
        pizzaCard.innerHTML = `
            <div class="pizza-image" style="background-image: url('${pizza.image}')"></div>
            <div class="pizza-info">
                <h3>${pizza.name}</h3>
                <p>${pizza.ingredients}</p>
                <div class="pizza-price">
                    <span class="price">R$ ${pizza.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${pizza.id}">Adicionar</button>
                </div>
            </div>
        `;
        
        pizzaGrid.appendChild(pizzaCard);
    });
    
    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Adicionar pizza ao carrinho
function addToCart(e) {
    const pizzaId = parseInt(e.target.getAttribute('data-id'));
    const pizza = pizzas.find(p => p.id === pizzaId);
    
    // Verificar se a pizza já está no carrinho
    const existingItem = cart.find(item => item.id === pizzaId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...pizza,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification(pizza.name);
}

// Atualizar carrinho
function updateCart() {
    // Atualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar itens no modal
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <div class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Atualizar total
    cartTotal.textContent = totalPrice.toFixed(2);
    
    // Adicionar event listeners aos botões de quantidade e remoção
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Aumentar quantidade
function increaseQuantity(e) {
    const pizzaId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === pizzaId);
    
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// Diminuir quantidade
function decreaseQuantity(e) {
    const pizzaId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === pizzaId);
    
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeItem(e);
    }
}

// Remover item
function removeItem(e) {
    const pizzaId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
    cart = cart.filter(item => item.id !== pizzaId);
    updateCart();
}

// Mostrar notificação de item adicionado
function showCartNotification(pizzaName) {
    const notification = document.createElement('div');
    notification.classList.add('cart-notification');
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${pizzaName} adicionada ao carrinho!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Finalizar pedido
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const whatsappNumber = "5511999999999"; // Substitua pelo seu número
    let message = "Olá, gostaria de fazer um pedido:\n\n";
    
    cart.forEach(item => {
        message += `${item.name} - ${item.quantity}x - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: R$ ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}`;
    
    // Limpar carrinho
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Event listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe active de todos os botões
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Adicionar classe active ao botão clicado
        button.classList.add('active');
        // Filtrar pizzas
        displayPizzas(button.getAttribute('data-category'));
    });
});

checkoutBtn.addEventListener('click', checkout);

// Adicionar estilo para notificação
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ecc71;
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .cart-notification i {
        margin-right: 10px;
        font-size: 1.2rem;
    }
    
    .cart-notification.show {
        opacity: 1;
    }
`;
document