let usuario = []

function exibirMensagem (texto, tipo) {
    const mensagem = document.getElementById('mensagem')
    mensagem.textContent = texto;

    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}

function cadastrar () {
    const usuario = document.getElementById('nome-usuario').value;
    const senhaCorreta = document.getElementById('senha').value;
    const confirmeSenha = document.getElementById('confirmar-senha').value;

        if ( usuario && (senhaCorreta === confirmeSenha)) {
        usuario.push({usuario, senhaCorreta, confirmeSenha})
        document.getElementById('nome-usuario').value = "";
        document.getElementById('senha').value = "";
        document.getElementById('confirmar-senha').value = "";
        exibirMensagem("Cadastrado com sucesso!")
        
        setTimeout(() => {
            window.location.href = "PizzaLogin.html"
        },1000);
        exibirMensagem("Cadastrado com sucesso!")
        }else {
            exibirMensagem("Preencha todos os campos corretamentes")
        } atualizarUsuario()

    } 
function validarLogin () {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const usuarioCorreto2 = "biel";
    const senhaCorreta2 = "123";
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            window.location.href = "PizzaAdm.html"
        }, 1000);
    } else if (usuario === usuarioCorreto2 && senha === senhaCorreta2){
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            window.location.href = "PizzaUsuario.html"
        }, 1000);
    }
    else {
        exibirMensagem("Usuário ou senha incorreto.","erro")
    }
}

let pizzaria = []
let pizzaAlterar = null;

function mostrarSecao(secao) {
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('consulta').classList.add('hidden');
    document.getElementById('alterar').classList.add('hidden');
    document.getElementById('venda').classList.add('hidden');
    document.getElementById('relatorio-vendas').classList.add('hidden');

    document.getElementById(secao).classList.remove('hidden');
    
}

function adicionarPizza (){
    const nome = document.getElementById('nome').value;
    const ingrediente = document.getElementById('ingrediente').value;
    const preço = document.getElementById('preco').value;

    if (nome && ingrediente && preço) {
        pizzaria.push({nome, ingrediente, preço});
        document.getElementById("nome").value = "";
        document.getElementById("ingrediente").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
        document.getElementById('text').innerHTML = `Pizza adicionada com Sucesso!!`
    } else {
        document.getElementById('text').innerHTML = `Preencha todos os campos por favor!!`   
    }
}

//Buscar Pizza -- 62 á 76
function buscarPizza () {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultado = pizzaria.filter((pizza)=> pizza.nome.toLowerCase().includes(busca));
    atualizarLista(resultado);
    if (resultado) {
        document.getElementById("texto1").innerHTML ="Pizza Encontrada"
    } else{
        document.getElementById('texto1').innerHTML = `Pizza não encontrada.` 
    }
}

//Alterar Pizza -- 80 á 98
function buscarPizzaAlterar () {
    const busca = document.getElementById("buscar-alterar").value.toLowerCase();
    pizzaParaAlterar = pizzaria.find((pizza) => pizza.nome.toLowerCase().includes(busca));

    if (pizzaParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
        document.getElementById("novo-ingrediente").value = pizzaParaAlterar.ingrediente;
        document.getElementById("novo-preco").value = pizzaParaAlterar.preço
    } else{
        document.getElementById('textt').innerHTML = `Pizza não encontrada.` 
    }
}

//Alterar Pizza -- 80 á 98
function alterarPizza () {
    if(pizzaParaAlterar) {
        const novoNome = document.getElementById("novo-nome").value;
        const novoIngrediente = document.getElementById("novo-ingrediente").value;
        const novoPreço = parseInt(document.getElementById("novo-preco").value);

        if(novoNome && novoIngrediente && novoPreço) {
            pizzaParaAlterar.nome = novoNome;
            pizzaParaAlterar.ingrediente = novoIngrediente;
            pizzaParaAlterar.preço = novoPreço;

            
            document.getElementById('textt').innerHTML = `Pizza alterada com sucesso.` ;
            
        } else {
            document.getElementById('textt').innerHTML = `Preencha todos os campos,por favor.` 
            document.getElementById("form-alterar").classList.add("hidden");
        }
    }
    atualizarLista();
}

function atualizarLista(lista = pizzaria){
    const tabela = document.getElementById("lista-pizzas");
    tabela.innerHTML = "";

    lista.forEach ((pizza) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizza.nome}</td>
        <td>${pizza.ingrediente}</td>
        <td>R$${Number(pizza.preço).toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
    });
}

// Registro de vendas -- 102 á 119
let vendas = []; //Array para armazenar as vendas

function registrarVenda() {
    const nome = document.getElementById('venda-nome').value;
    const preço = document.getElementById('venda-preco').value;
    const cliente = document.getElementById('venda-cliente').value;

    if(nome && preço && cliente ) {
        const listaVendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');//criou o espaço onde a gente pode armazenar o elemento
        item.textContent = `Nome: ${nome}, Preço: R$${preço}, Comprador: ${cliente}`;
        listaVendas.appendChild(item);//tras as imformações que o elemento 

        //Adicionar venda ao array de vendas
        vendas.push({nome,preço,cliente});

        //Limpar os campos
        document.getElementById('venda-nome').value = '';
        document.getElementById('venda-preco').value = '';
        document.getElementById('venda-cliente').value = '';
    } else {
        setTimeout(() => {
         document.getElementById('texttt').innerHTML = `Peencha todos os campos por favor.`;
    }, 2000);
       
    }
}

//Relatório de Vendas
function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelaRelatorio.innerHTML = ''; //Limpar Tabela

    if(vendas.length === 0 ) {
         
        return;
    }

    let totalVendas = 0; //Variavel para armazenar o total de vendas

    if(totalVendas.length === 0 ){
        document.getElementById('text4').innerHTML = `Valor de venda não registrada.` 
        return;
    }

    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>R$${parseFloat(venda.preço).toFixed(2)}</td>
        <td>${venda.cliente}</td>
        `;
        tabelaRelatorio.appendChild(linha);

        // Somar o preço ao total de vendas
        totalVendas += parseFloat(venda.preço);
    })

    //Adicionar uma linha para o total de vendas
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>
    `;
    tabelaRelatorio.appendChild(linhaTotal);

    //Exibir a area de relatorio
    document.getElementById('relatorio-vendas').classList.remove('hidden')
}

function mostrarLogin () {
    setTimeout(() => {
        window.location.href = "PizzaLogin.html"
    }, 1000);
}

