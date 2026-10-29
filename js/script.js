const ligaHamburguer = document.getElementById("liga-hamburguer");
const xHamburguer = document.getElementById("x-hamburguer");
const menuHamburguer = document.getElementById("menu");
const btnCreate = document.getElementById("btn-create");
const btnLogin = document.getElementById("btn-login");
const createNome = document.getElementById("create-name");
const nomeSpan = document.getElementById("nome-span");
const createEmail = document.getElementById("create-email");
const emailSpan = document.getElementById("email-span");
const createSenha = document.getElementById("create-senha");
const senhaSpan = document.getElementById("senha-span");
const createCartao = document.getElementById("create-cartao");
const cartaoSpan = document.getElementById("cartao-span");
const createEndereco = document.getElementById("create-endereco");
const enderecoSpan = document.getElementById("endereco-span");
const loginEmail = document.getElementById("login-email");
const emailSpanLogin = document.getElementById("email-span-login");
const loginSenha = document.getElementById("login-senha");
const senhaSpanLogin = document.getElementById("senha-span-login");

function limparInput() {
  document.getElementById("login-email").value = "";
  document.getElementById("login-senha").value = "";
  document.getElementById("create-name").value = "";
  document.getElementById("create-email").value = "";
  document.getElementById("create-senha").value = "";
  document.getElementById("create-cartao").value = "";
  document.getElementById("create-endereco").value = "";
}

if (ligaHamburguer && xHamburguer && menuHamburguer) {
  ligaHamburguer.addEventListener("click", () => {
    menuHamburguer.style.display = "flex";
    ligaHamburguer.style.display = "none";
    xHamburguer.style.display = "flex";
  });

  xHamburguer.addEventListener("click", () => {
    menuHamburguer.style.display = "none";
    ligaHamburguer.style.display = "flex";
    xHamburguer.style.display = "none";
  });
}

const btnAccount = document.getElementById("btn-account");
const btnAccountX = document.getElementById("btn-account-x");
const boxAccount = document.getElementById("box-account");
const switchCreate = document.getElementById("switch-create");
const switchLogin = document.getElementById("switch-login");
const boxCreate = document.getElementById("box-create");
const boxLogin = document.getElementById("box-login");

if (
  btnAccount &&
  btnAccountX &&
  boxAccount &&
  btnCreate &&
  btnLogin &&
  switchCreate &&
  switchLogin &&
  boxCreate &&
  boxLogin
) {
  btnAccount.addEventListener("click", () => {
    boxAccount.style.marginLeft = "0vw";
    btnAccount.style.display = "none";
    btnAccountX.style.display = "flex";
  });

  btnAccountX.addEventListener("click", () => {
    boxAccount.style.marginLeft = "-100vw";
    btnAccountX.style.display = "none";
    btnAccount.style.display = "flex";
  });

  switchLogin.addEventListener("click", () => {
    boxCreate.style.right = "120vw";
    boxLogin.style.right = "0vw";
  });

  switchCreate.addEventListener("click", () => {
    boxCreate.style.right = "0vw";
    boxLogin.style.right = "-120vw";
  });

  btnCreate.addEventListener("click", () => {
    let nomeC = false;
    let emailC = false;
    let senhaC = false;
    let cartaoC = false;
    let enderecoC = false;

    if (createNome.value == "") {
      nomeSpan.textContent = "O nome é obrigatório";
    } else {
      nomeSpan.textContent = "";
      nomeC = true;
    }

    if (createEmail.value == "") {
      emailSpan.textContent = "O E-mail é obrigatório";
    } else {
      emailSpan.textContent = "";
      emailC = true;
    }

    if (createSenha.value == "") {
      senhaSpan.textContent = "A senha é obrigatória";
    } else if (createSenha.value.length <= 6) {
      senhaSpan.textContent = "A senha é muita curta, mínimo 6 caracteres";
    } else {
      senhaSpan.textContent = "";
      senhaC = true;
    }

    if (createCartao.value == "") {
      cartaoSpan.textContent = "O cartão é obrigatório";
    } else {
      cartaoSpan.textContent = "";
      cartaoC = true;
    }

    if (createEndereco.value == "") {
      enderecoSpan.textContent = "O endereço é obrigatório";
    } else {
      enderecoSpan.textContent = "";
      enderecoC = true;
    }

    if (
      nomeC == true &&
      emailC == true &&
      senhaC == true &&
      cartaoC == true &&
      enderecoC == true
    ) {
      alert("Conta criada com sucesso!");
      limparInput();
      boxAccount.style.marginLeft = "-100vw";
      btnAccountX.style.display = "none";
      btnAccount.style.display = "flex";
    }
  });

  btnLogin.addEventListener("click", () => {
    let emailL = false;
    let senhaL = false;
    if (loginEmail.value == "") {
      emailSpanLogin.textContent = "O E-mail é obrigatório";
    } else {
      emailSpanLogin.textContent = "";
      emailL = true;
    }

    if (loginSenha.value == "") {
      senhaSpanLogin.textContent = "A senha é obrigatória";
    } else {
      senhaSpanLogin.textContent = "";
      senhaL = true;
    }

    if (senhaL == true && emailL == true) {
      alert("Log-in realizado com sucesso!");
      limparInput();
      boxAccount.style.marginLeft = "-100vw";
      btnAccountX.style.display = "none";
      btnAccount.style.display = "flex";
    }
  });
}

/* =========================================================
   CARRINHO DE COMPRAS
   O localStorage guarda os itens neste navegador.
   ========================================================= */

var chaveCarrinho = "extech-carrinho";
var botaoCarrinho = document.getElementById("btn-carrinho");
var carrinho = [];

function carregarCarrinho() {
  try {
    var carrinhoSalvo = localStorage.getItem(chaveCarrinho);

    if (carrinhoSalvo !== null) {
      var dados = JSON.parse(carrinhoSalvo);
      if (Array.isArray(dados)) {
        carrinho = dados;
      }
    }
  } catch (erro) {
    carrinho = [];
  }
}

function salvarCarrinho() {
  localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
}

function formatarPreco(valor) {
  var formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatador.format(valor);
}

function converterPreco(texto) {
  texto = texto.replace(/[^\d,]/g, "");
  texto = texto.replace(/\./g, "");
  texto = texto.replace(",", ".");
  return Number(texto);
}

function criarPainelCarrinho() {
  var painel = document.createElement("aside");
  painel.id = "painel-carrinho";
  painel.className = "painel-carrinho";
  painel.setAttribute("aria-hidden", "true");
  painel.setAttribute("aria-labelledby", "titulo-carrinho");

  painel.innerHTML =
    '<div class="cabecalho-carrinho">' +
    '<h2 id="titulo-carrinho">Seu carrinho</h2>' +
    '<button class="fechar-carrinho" type="button" aria-label="Fechar carrinho">×</button>' +
    "</div>" +
    '<p class="mensagem-carrinho" aria-live="polite"></p>' +
    '<ul class="itens-carrinho"></ul>' +
    '<div class="resumo-carrinho">' +
    '<div class="linha-total"><span>Total</span><strong class="valor-total">R$ 0,00</strong></div>' +
    '<button class="finalizar-pedido" type="button">Finalizar pedido</button>' +
    '<button class="limpar-carrinho" type="button">Limpar carrinho</button>' +
    "</div>";

  document.body.appendChild(painel);
  return painel;
}

var painelCarrinho = criarPainelCarrinho();
var listaCarrinho = painelCarrinho.querySelector(".itens-carrinho");
var totalCarrinho = painelCarrinho.querySelector(".valor-total");
var mensagemCarrinho = painelCarrinho.querySelector(".mensagem-carrinho");
var botaoFecharCarrinho = painelCarrinho.querySelector(".fechar-carrinho");
var botaoLimparCarrinho = painelCarrinho.querySelector(".limpar-carrinho");
var botaoFinalizarPedido = painelCarrinho.querySelector(".finalizar-pedido");

function contarItens() {
  var quantidade = 0;
  var indice;

  for (indice = 0; indice < carrinho.length; indice++) {
    quantidade = quantidade + carrinho[indice].quantidade;
  }
  return quantidade;
}

function atualizarContador() {
  if (!botaoCarrinho) {
    return;
  }

  var contador = botaoCarrinho.querySelector(".contador-carrinho");

  if (!contador) {
    contador = document.createElement("span");
    contador.className = "contador-carrinho";
    contador.setAttribute("aria-live", "polite");
    botaoCarrinho.appendChild(contador);
  }

  var quantidade = contarItens();
  contador.textContent = quantidade;
  contador.hidden = quantidade === 0;

  if (quantidade > 0) {
    botaoCarrinho.setAttribute(
      "aria-label",
      "Abrir carrinho com " + quantidade + " item(ns)",
    );
  } else {
    botaoCarrinho.setAttribute("aria-label", "Abrir carrinho vazio");
  }
}

function renderizarCarrinho() {
  listaCarrinho.innerHTML = "";
  var total = 0;
  var indice;

  for (indice = 0; indice < carrinho.length; indice++) {
    total = total + carrinho[indice].preco * carrinho[indice].quantidade;
  }

  if (carrinho.length === 0) {
    var avisoVazio = document.createElement("li");
    avisoVazio.className = "carrinho-vazio";
    avisoVazio.textContent = "Seu carrinho está vazio.";
    listaCarrinho.appendChild(avisoVazio);
  } else {
    for (indice = 0; indice < carrinho.length; indice++) {
      var produto = carrinho[indice];
      var linha = document.createElement("li");
      linha.className = "item-carrinho";

      linha.innerHTML =
        '<img src="' +
        produto.imagem +
        '" alt="' +
        produto.nome +
        '" />' +
        '<div class="dados-item-carrinho">' +
        "<h3>" +
        produto.nome +
        "</h3>" +
        "<span>" +
        formatarPreco(produto.preco) +
        "</span>" +
        '<div class="controle-quantidade" aria-label="Quantidade de ' +
        produto.nome +
        '">' +
        '<button type="button" data-acao="diminuir" aria-label="Diminuir quantidade de ' +
        produto.nome +
        '">−</button>' +
        "<strong>" +
        produto.quantidade +
        "</strong>" +
        '<button type="button" data-acao="aumentar" aria-label="Aumentar quantidade de ' +
        produto.nome +
        '">+</button>' +
        "</div>" +
        "</div>" +
        '<button class="remover-item" type="button" aria-label="Remover ' +
        produto.nome +
        '">Remover</button>';

      var botaoDiminuir = linha.querySelector('[data-acao="diminuir"]');
      var botaoAumentar = linha.querySelector('[data-acao="aumentar"]');
      var botaoRemover = linha.querySelector(".remover-item");
      botaoDiminuir.setAttribute("data-id", produto.id);
      botaoAumentar.setAttribute("data-id", produto.id);
      botaoRemover.setAttribute("data-id", produto.id);

      botaoDiminuir.addEventListener("click", function () {
        alterarQuantidade(this.getAttribute("data-id"), -1);
      });
      botaoAumentar.addEventListener("click", function () {
        alterarQuantidade(this.getAttribute("data-id"), 1);
      });
      botaoRemover.addEventListener("click", function () {
        removerDoCarrinho(this.getAttribute("data-id"));
      });

      listaCarrinho.appendChild(linha);
    }
  }

  if (carrinho.length === 0) {
    botaoLimparCarrinho.disabled = true;
    botaoFinalizarPedido.disabled = true;
  } else {
    botaoLimparCarrinho.disabled = false;
    botaoFinalizarPedido.disabled = false;
  }

  totalCarrinho.textContent = formatarPreco(total);
  atualizarContador();
}

function adicionarAoCarrinho(produtoNovo) {
  var produtoEncontrado = false;
  var indice;

  for (indice = 0; indice < carrinho.length; indice++) {
    if (carrinho[indice].id === produtoNovo.id) {
      carrinho[indice].quantidade = carrinho[indice].quantidade + 1;
      produtoEncontrado = true;
      break;
    }
  }

  if (!produtoEncontrado) {
    produtoNovo.quantidade = 1;
    carrinho.push(produtoNovo);
  }

  salvarCarrinho();
  renderizarCarrinho();
  mensagemCarrinho.textContent =
    produtoNovo.nome + " foi adicionado ao carrinho.";
}

function alterarQuantidade(id, mudanca) {
  var indice;

  for (indice = 0; indice < carrinho.length; indice++) {
    if (carrinho[indice].id === id) {
      carrinho[indice].quantidade = carrinho[indice].quantidade + mudanca;

      if (carrinho[indice].quantidade <= 0) {
        carrinho.splice(indice, 1);
      }
      break;
    }
  }

  salvarCarrinho();
  renderizarCarrinho();
}

function removerDoCarrinho(id) {
  var nomeRemovido = "Produto";
  var novaLista = [];
  var indice;

  for (indice = 0; indice < carrinho.length; indice++) {
    if (carrinho[indice].id === id) {
      nomeRemovido = carrinho[indice].nome;
    } else {
      novaLista.push(carrinho[indice]);
    }
  }

  carrinho = novaLista;
  salvarCarrinho();
  renderizarCarrinho();
  mensagemCarrinho.textContent = nomeRemovido + " foi removido do carrinho.";
}

function abrirCarrinho() {
  painelCarrinho.classList.add("aberto");
  painelCarrinho.setAttribute("aria-hidden", "false");
  if (botaoCarrinho) {
    botaoCarrinho.setAttribute("aria-expanded", "true");
  }
}

function fecharCarrinho() {
  painelCarrinho.classList.remove("aberto");
  painelCarrinho.setAttribute("aria-hidden", "true");
  if (botaoCarrinho) {
    botaoCarrinho.setAttribute("aria-expanded", "false");
  }
}

if (botaoCarrinho) {
  botaoCarrinho.type = "button";
  botaoCarrinho.setAttribute("aria-controls", "painel-carrinho");
  botaoCarrinho.setAttribute("aria-expanded", "false");
  botaoCarrinho.addEventListener("click", function () {
    if (painelCarrinho.classList.contains("aberto")) {
      fecharCarrinho();
    } else {
      abrirCarrinho();
    }
  });
}

botaoFecharCarrinho.addEventListener("click", fecharCarrinho);

botaoLimparCarrinho.addEventListener("click", function () {
  carrinho = [];
  salvarCarrinho();
  renderizarCarrinho();
  mensagemCarrinho.textContent = "Carrinho limpo.";
});

botaoFinalizarPedido.addEventListener("click", function () {
  mensagemCarrinho.textContent =
    "Pedido pronto para finalizar. Entre em contato com a EXTech para concluir a compra.";
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharCarrinho();
  }
});

/* =========================================================
   BOTÕES DE ADICIONAR PRODUTO
   Os dados são lidos dos cartões que já estão no HTML.
   ========================================================= */

function criarBotaoAdicionar(cartao, produto) {
  var botao = document.createElement("button");
  botao.type = "button";
  botao.className = "adicionar-carrinho";
  botao.textContent = "Adicionar ao carrinho";
  botao.setAttribute(
    "aria-label",
    "Adicionar " + produto.nome + " ao carrinho",
  );

  botao.addEventListener("click", function () {
    adicionarAoCarrinho(produto);
    cartao.classList.add("produto-adicionado");

    setTimeout(function () {
      cartao.classList.remove("produto-adicionado");
    }, 650);
  });

  cartao.querySelector(".texto-produto").appendChild(botao);
}

function ativarProdutos() {
  var seletor =
    "#lancamentos > #produtos article, main#produtos .categorias article";
  var cartoes = document.querySelectorAll(seletor);
  var indice;

  for (indice = 0; indice < cartoes.length; indice++) {
    var cartao = cartoes[indice];

    if (cartao.querySelector(".adicionar-carrinho")) {
      continue;
    }

    var elementoTitulo = cartao.querySelector(".texto-produto h3");
    var elementoPreco = cartao.querySelector(".texto-produto h4");
    var imagem = cartao.querySelector(".img-produto img");

    if (!elementoTitulo || !elementoPreco || !imagem) {
      continue;
    }

    var nome = elementoTitulo.textContent.trim();
    var preco = converterPreco(elementoPreco.textContent.trim());

    if (nome === "" || isNaN(preco)) {
      continue;
    }

    var produto = {
      id: nome.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + indice,
      nome: nome,
      preco: preco,
      imagem: imagem.getAttribute("src"),
    };

    criarBotaoAdicionar(cartao, produto);

    cartao.addEventListener("pointerdown", function () {
      this.classList.add("produto-ativo");
    });
    cartao.addEventListener("pointerup", function () {
      this.classList.remove("produto-ativo");
    });
    cartao.addEventListener("pointercancel", function () {
      this.classList.remove("produto-ativo");
    });
    cartao.addEventListener("pointerleave", function () {
      this.classList.remove("produto-ativo");
    });
  }
}

/* =========================================================
   BUSCA DE PRODUTOS
   O termo da busca é enviado para Produtos.html pela URL.
   ========================================================= */

var campoBusca = document.getElementById("form-pesquisa");
var botaoBuscar = document.getElementById("btn-pesquisar");
var catalogo = document.querySelector("main#produtos");
var lancamentosSalvos = null;

function normalizarTexto(texto) {
  texto = texto.toLocaleLowerCase("pt-BR");
  texto = texto.normalize("NFD");
  texto = texto.replace(/[\u0300-\u036f]/g, "");
  return texto.trim();
}

function executarBusca() {
  if (!campoBusca) {
    return;
  }

  var termo = campoBusca.value.trim();
  var destino = new URL("Produtos.html", window.location.href);

  if (termo !== "") {
    destino.searchParams.set("q", termo);
  }

  window.location.assign(destino.href);
}

function obterLancamentos() {
  if (lancamentosSalvos !== null) {
    return lancamentosSalvos;
  }

  var seletor = "#lancamentos > #produtos article";
  var lancamentosNaPagina = document.querySelectorAll(seletor);

  if (lancamentosNaPagina.length > 0) {
    lancamentosSalvos = Promise.resolve(
      Array.prototype.slice.call(lancamentosNaPagina),
    );
    return lancamentosSalvos;
  }

  var enderecoInicio = new URL("index.html", window.location.href);

  lancamentosSalvos = fetch(enderecoInicio)
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Não foi possível carregar os lançamentos.");
      }
      return resposta.text();
    })
    .then(function (html) {
      var documento = new DOMParser().parseFromString(html, "text/html");
      var cartoesInicio = documento.querySelectorAll(seletor);
      return Array.prototype.slice.call(cartoesInicio);
    })
    .catch(function () {
      return [];
    });

  return lancamentosSalvos;
}

function filtrarCatalogo(termo) {
  if (!catalogo) {
    return;
  }

  var resumo = catalogo.querySelector(".resultado-busca");

  if (!resumo) {
    resumo = document.createElement("section");
    resumo.className = "resultado-busca";
    resumo.setAttribute("aria-live", "polite");
    catalogo.insertBefore(resumo, catalogo.firstChild);
  }

  var busca = normalizarTexto(termo);
  var secaoLancamentosAntiga = catalogo.querySelector(".resultado-lancamentos");

  if (secaoLancamentosAntiga) {
    secaoLancamentosAntiga.remove();
  }

  var produtos = catalogo.querySelectorAll(".categorias article");
  var encontrados = 0;
  var indice;

  for (indice = 0; indice < produtos.length; indice++) {
    var textoProduto = normalizarTexto(produtos[indice].textContent);

    if (busca === "" || textoProduto.indexOf(busca) !== -1) {
      produtos[indice].hidden = false;
      encontrados++;
    } else {
      produtos[indice].hidden = true;
    }
  }

  var categorias = catalogo.querySelectorAll(".categorias");

  for (indice = 0; indice < categorias.length; indice++) {
    var cartoesCategoria = categorias[indice].querySelectorAll("article");
    var temProdutoVisivel = false;
    var indiceCartao;

    for (
      indiceCartao = 0;
      indiceCartao < cartoesCategoria.length;
      indiceCartao++
    ) {
      if (!cartoesCategoria[indiceCartao].hidden) {
        temProdutoVisivel = true;
      }
    }

    categorias[indice].hidden = !temProdutoVisivel;
    var tituloCategoria = categorias[indice].previousElementSibling;

    if (tituloCategoria && tituloCategoria.tagName === "H1") {
      tituloCategoria.hidden = !temProdutoVisivel;
    }
  }

  if (busca !== "") {
    obterLancamentos().then(function (lancamentos) {
      var correspondencias = [];
      var indiceLancamento;

      for (
        indiceLancamento = 0;
        indiceLancamento < lancamentos.length;
        indiceLancamento++
      ) {
        var textoLancamento = normalizarTexto(
          lancamentos[indiceLancamento].textContent,
        );

        if (textoLancamento.indexOf(busca) !== -1) {
          correspondencias.push(lancamentos[indiceLancamento].cloneNode(true));
        }
      }

      if (correspondencias.length > 0) {
        var secao = document.createElement("section");
        secao.className = "resultado-lancamentos";
        var titulo = document.createElement("h2");
        titulo.textContent = "Lançamentos";
        var grade = document.createElement("div");
        grade.className = "categorias";
        secao.appendChild(titulo);
        secao.appendChild(grade);

        for (
          indiceLancamento = 0;
          indiceLancamento < correspondencias.length;
          indiceLancamento++
        ) {
          var botaoAntigo = correspondencias[indiceLancamento].querySelector(
            ".adicionar-carrinho",
          );
          if (botaoAntigo) {
            botaoAntigo.remove();
          }
          grade.appendChild(correspondencias[indiceLancamento]);
        }

        resumo.parentNode.insertBefore(secao, resumo.nextSibling);
        encontrados = encontrados + correspondencias.length;
        ativarProdutos();
      }

      mostrarResumoBusca(resumo, termo, encontrados);
    });
  } else {
    resumo.innerHTML = "";
  }
}

function mostrarResumoBusca(resumo, termo, quantidade) {
  resumo.innerHTML = "";
  var texto = document.createElement("p");

  if (quantidade > 0) {
    texto.textContent =
      quantidade + " produto(s) encontrado(s) para “" + termo + "”.";
  } else {
    texto.textContent = "Nenhum produto encontrado para “" + termo + "”.";
  }

  resumo.appendChild(texto);
  var botaoLimparBusca = document.createElement("button");
  botaoLimparBusca.type = "button";
  botaoLimparBusca.className = "limpar-busca";
  botaoLimparBusca.textContent = "Ver todos os produtos";
  botaoLimparBusca.addEventListener("click", function () {
    var destino = new URL("Produtos.html", window.location.href);
    window.location.assign(destino.href);
  });
  resumo.appendChild(botaoLimparBusca);
}

if (campoBusca && botaoBuscar) {
  var parametros = new URLSearchParams(window.location.search);
  var termoInicial = parametros.get("q") || "";
  campoBusca.value = termoInicial;
  botaoBuscar.type = "button";
  botaoBuscar.setAttribute("aria-label", "Buscar produtos");
  botaoBuscar.addEventListener("click", executarBusca);

  campoBusca.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      executarBusca();
    }
  });

  if (catalogo && termoInicial !== "") {
    filtrarCatalogo(termoInicial);
  }
}

/* Inicia o carrinho e os botões dos produtos. */
carregarCarrinho();
ativarProdutos();
renderizarCarrinho();

if (window.innerWidth <= 768) {
  console.log("Plataform: Mobile");
} else {
  console.log("Plataform: Desktop");
}
