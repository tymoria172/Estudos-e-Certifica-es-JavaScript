import selecionaCotacao from "./imprimeCotacao.js";
const graficoDolar = document.getElementById("graficoDolar");

//configuração e construção do chart
const graficoParaDolar = new Chart(graficoDolar, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dólar",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});


// gera horario para colocar no grafico
function gerarHorario() {
  let data = new Date();
  let horario =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
  console.log(horario);
  return horario;
}

function adicionarDados(grafico, legenda, dados) {
  //coleta o array labels e coloca nele uma lista de legendas.
  grafico.data.labels.push(legenda);
  //acessa datasets e dentro do mesmo acessa/data e coloca uma lista de dados nela.
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(dados);
  });
  //necesario para atualizar o grafico constantemente
  grafico.update();
}

// criando trabalhador para fazer um processo multithread
let workerDolar = new Worker("./scrip/workers/workerDolar.js");
//mandando uma mensagem para o worker dollar, para ele realizar a conexão com a API de Cotação 
workerDolar.postMessage("usd");

//adicionamos um escutador que vai receber a mensagem da api, e criar variaveis, um com horario, outra com o valor da api por meio do .ASK
workerDolar.addEventListener("message", event => {
  let tempo = gerarHorario();
  let valor = event.data.ask;
  selecionaCotacao("dolar", valor);
  adicionarDados(graficoParaDolar, tempo, valor);
})

const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Iene",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});

let workerIene = new Worker("./scrip/workers/workerIene.js");
workerIene.postMessage("iene");
workerIene.addEventListener("message", event =>{
  let tempo = gerarHorario();
  let valor = event.data.ask;
  adicionarDados(graficoParaIene, tempo, valor);
  selecionaCotacao("iene", valor);
})