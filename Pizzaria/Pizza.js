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

function cadastrar() {
  const novoUsuario = document.getElementById("nome-usuario").value;
  const novaSenha = document.getElementById("senha").value;
  const novoEmail = document.getElementById("email").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usuarios.some(u => u.usuario === novoUsuario)) {
    exibirMensagem("Usuário já existe!", "erro");
    return;
  }
  
  if (!novoUsuario || !novaSenha || !novoEmail) {
    exibirMensagem("Preencha todos os campos!", "erro");
    return;
  }

  usuarios.push({ usuario: novoUsuario, senha: novaSenha, email: novoEmail });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  exibirMensagem("Usuário cadastrado com sucesso!", "sucesso");
  setTimeout(() => {
    window.location.href = "PizzaLogin.html"
  }, 2000);

  
  // Limpa os campos após cadastro
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("email").value = "";
  
  return;
}

function buscarUsuario(usuario, senha) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  return usuarios.find(u => u.usuario === usuario && u.senha === senha);
}

function buscarUsuarioPorNome(usuario) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  return usuarios.find(u => u.usuario === usuario);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const senhaAdm = "1234"
  const usuarioAdm = "admin"

  if (buscarUsuario(usuario, senha)) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "PizzaUsuario.html";
    }, 1000);
  } else if (usuario === usuarioAdm && senha === senhaAdm){
    exibirMensagem("Login realizado com sucesso Administrador!", "sucesso");
    setTimeout(() => {
      window.location.href = "PizzaAdm.html";
    }, 1000);
  }
  else {
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
    if (resultado) {
        document.getElementById("texto1").innerHTML ="Pizza Encontrada"
    } else if (resultado === null){
        document.getElementById('texto1').innerHTML = `Pizza não encontrada.`
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
    } else{
        document.getElementById('textt').innerHTML = `Pizza não encontrada.` 
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
            document.getElementById('textt').innerHTML = `Preencha todos os campos,por favor.` 
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
    } else{
        document.getElementById('texto0').innerHTML = `Pizza não encontrada.` 
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
        item.textContent = `Nome: ${Vendanome}, Preço: R$${Vendapreço}, Comprador: ${Vendacliente}`;
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

