//criando meus elementos que irei usar
const form = document.querySelector("#novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaElemento(elemento);
});

//colocando a função de submit do formulario
form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  //cria variavel nome e quantidade e capturando os elementos com id nome e quantidade que vier do submit
  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const existe = itens.find((elemento) => elemento.nome === nome.value);

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[itens.findIndex((elemento) => elemento.id === existe.id)] = itemAtual;
  } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

    criaElemento(itemAtual);

    itens.push(itemAtual);
  }

  //criando local storage
  localStorage.setItem("itens", JSON.stringify(itens));

  //apagando no formulario o nome e quantidade no input
  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
  //criando elemento 'li' e colocando dentro desse elemento uma classe "item"
  const novoitem = document.createElement("li");
  novoitem.classList.add("item");

  //fazendo o mesmo com quantidadeItem criando uma <strong>, e colocando o valor de quantidade nela
  const quantidadeItem = document.createElement("strong");
  quantidadeItem.dataset.id = item.id;
  quantidadeItem.innerHTML = item.quantidade;

  // colocando o elemento quantidadeItem dentro do elemento novoItem
  novoitem.appendChild(quantidadeItem);

  //colocando o valor de nome dentro dessa tag
  novoitem.innerHTML += item.nome;

  novoitem.appendChild(botaoDeleta(item.id));

  //colocando o objeto / elemento ja criado novoitem dentro do elemento lista.
  lista.appendChild(novoitem);
}

function atualizaElemento(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML =
    item.quantidade;
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement("button");
  elementoBotao.innerText = "X";

  elementoBotao.addEventListener("click", function () {
    deletaElemento(this.parentNode, id);
  });
  return elementoBotao;
}

function deletaElemento(tag, id) {
  tag.remove();

  itens.splice(
    itens.findIndex((elemento) => elemento.id == id),
    1
  );

  localStorage.setItem("itens", JSON.stringify(itens));
}
