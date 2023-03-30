const lista = document.querySelectorAll("[data-lista]");

function selecionaCotacao(nome, valor) {
  lista.forEach((listaEscolhida) => {
    if (listaEscolhida.id == nome) {
      imprimeCotacao(listaEscolhida, nome, valor);
    }
  });
}

function imprimeCotacao(lista, nome, valor) {
  //limpo as listas
  lista.innerHTML = "";
  const plurais = {
    "dolar": "dolares",
    "iene": "ienes"
  }
  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    //cria um elemento LI na variavel listaItem,
    const listaItem = document.createElement("li");
    //dentro do li tem uma string com o multiplicador(10 ou mais) mais o nome da moeda, e o valor dela, corrigido e com o nome em plural ou singular dependendo da quantidade
    listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]}: R$${(
      valor * multiplicador
    ).toFixed(2)}`;
    //apos isso incluimos o li na lista.
    lista.appendChild(listaItem);
  }
}

export default selecionaCotacao;
