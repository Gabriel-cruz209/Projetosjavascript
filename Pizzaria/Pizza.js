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

// Função para cadastrar um novo usuário
function cadastrar() {
  // Pega os valores digitados
  const nome = document.getElementById("nome-usuario").value;
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value;

  // Pega lista de usuários ou cria vazia
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Se já existe usuário com o mesmo nome
  if (usuarios.some(u => u.usuario === nome)) {
    exibirMensagem("Usuário já existe!", "erro");
    return; // Para a função
  }

  // Se faltar algum campo
  if (!nome || !senha || !email) {
    exibirMensagem("Preencha todos os campos!", "erro");
    return;
  }

  // Adiciona novo usuário
  usuarios.push({ usuario: nome, senha: senha, email: email });

  // Salva lista atualizada
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Mensagem de sucesso
  exibirMensagem("Usuário cadastrado com sucesso!", "sucesso");

  // Depois de 2 segundos, vai para login
  setTimeout(() => window.location.href = "PizzaLogin.html", 2000);

  // Limpa os campos
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("email").value = "";
}

// Função para buscar usuário por nome e senha
function buscarUsuario(nome, senha) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  return usuarios.find(u => u.usuario === nome && u.senha === senha);
}

// Função para buscar usuário só pelo nome
function buscarUsuarioPorNome(nome) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  return usuarios.find(u => u.usuario === nome);
}

// Função para validar o login
function validarLogin() {
  const nome = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Dados do admin
  const adminNome = "admin";
  const adminSenha = "1234";

  // Se for usuário normal
  if (buscarUsuario(nome, senha)) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => window.location.href = "PizzaUsuario.html", 1000);

  // Se for admin
  } else if (nome === adminNome && senha === adminSenha) {
    exibirMensagem("Login realizado com sucesso Administrador!", "sucesso");
    setTimeout(() => window.location.href = "PizzaAdm.html", 1000);

  // Se for errado
  } else {
    exibirMensagem("Usuário ou senha incorretos.", "erro");
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
    if(resultado.length === 0 ) {
        document.getElementById('texto1').innerHTML = `Pizza não encontrada`
        return;
    }
    if (resultado) {
        document.getElementById("texto1").innerHTML ="Pizza Encontrada"
        return;
    }
    else {
        document.getElementById('texto1').innerHTML = `Pizza não.`
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
        document.getElementById('textt1').innerHTML = `Pizza encontrada.`
    }
    else{
        document.getElementById('textt1').innerHTML = `Pizza não encontrada.` 
        return;
    }
}

//Alterar Pizza -- 80 á 98
function alterarPizza () {
        const novoNome = document.getElementById("novo-nome").value;
        const novoIngrediente = document.getElementById("novo-ingrediente").value;
        const novoPreço = parseFloat(document.getElementById("novo-preco").value);

        if(novoNome && novoIngrediente && novoPreço) {
            pizzaParaAlterar.nome = novoNome;
            pizzaParaAlterar.ingrediente = novoIngrediente;
            pizzaParaAlterar.preço = novoPreço;

            
            document.getElementById('textt').innerHTML = `Pizza alterada com sucesso.` ;
            
        } else if (novoNome === null && novoIngrediente === null && novoPreço === null){
            document.getElementById('textt').innerHTML = (`Preencha todos os campos,por favor.`,"sucesso") 
            document.getElementById("form-alterar").classList.add("hidden");
        }
        else{
            document.getElementById('textt').innerHTML = `Preencha todos os ,por favor.` 
        }atualizarLista();

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

function buscarPizzaVenda() {
    const busca = document.getElementById("buscar-venda").value.toLowerCase();
    pizzaVenda = pizzaria.find((pizza) => pizza.nome.toLowerCase().includes(busca));

    if (pizzaVenda) {
        document.getElementById("form-venda").classList.remove("hidden");
        document.getElementById("venda-nome").value = pizzaVenda.nome;
        document.getElementById("venda-preco").value = pizzaVenda.preço;
        document.getElementById('texto0').innerHTML = `Pizza encontrada.`
    } else{
        document.getElementById('texto0').innerHTML = `Pizza não encontrada.` 
        return;
    }
}


// Registro de vendas -- 102 á 119
let vendas = []; //Array para armazenar as vendas

function registrarVenda() {
    const Vendanome = document.getElementById('venda-nome').value;
    const Vendapreço = parseFloat(document.getElementById('venda-preco').value);
    const Vendacliente = document.getElementById('venda-cliente').value;

    if(Vendanome && Vendapreço && Vendacliente ) {
        pizzaVenda.nome = Vendanome
        pizzaVenda.preco = Vendapreço
        const listaVendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');//criou o espaço onde a gente pode armazenar o elemento
        item.textContent = `Nome: ${Vendanome}  Preço: R$${Vendapreço}  Comprador: ${Vendacliente}`;
        listaVendas.appendChild(item);//tras as imformações que o elemento 

        //Adicionar venda ao array de vendas
        vendas.push({Vendanome,Vendapreço,Vendacliente});

        //Limpar os campos
        document.getElementById('venda-nome').value = '';
        document.getElementById('venda-preco').value = '';
        document.getElementById('venda-cliente').value = '';
        document.getElementById('texttt').innerHTML = `Venda adicionada com Sucesso!`
    } else if (nome === null  && preço === null && cliente === null) {
        document.getElementById('texttt').innerHTML = `Peencha todos os campos por favor.`
    } 
    else {
        document.getElementById('texttt').innerHTML = `Peencha todos os campos por favor.`
    }}


//Relatório de Vendas
function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelaRelatorio.innerHTML = ''; //Limpar Tabela

    if(vendas.length === 0 ) {
        document.getElementById('text4').innerHTML = `Nenhuma venda resgistrada no momento.`
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
        <td>${venda.Vendanome}</td>
        <td>R$${parseFloat(venda.Vendapreço).toFixed(2)}</td>
        <td>${venda.Vendacliente}</td>
        `;
        tabelaRelatorio.appendChild(linha);

        // Somar o preço ao total de vendas
        totalVendas += parseFloat(venda.Vendapreço);
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

function mostrarRelatorioVendas() {
    gerarRelatorioVendas();  
    mostrarSecao('relatorio-vendas');  // Mostra a seção do relatório
}