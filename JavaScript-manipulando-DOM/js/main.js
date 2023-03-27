//selecionando meus elementos html
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const peca = document.querySelectorAll("[data-peca]");

//objeto peças com valores padronizados
const pecas = {
   "bracos": {
       "forca": 29,
       "poder": 35,
       "energia": -21,
       "velocidade": -5
   },

   "blindagem": {
       "forca": 41,
       "poder": 20,
       "energia": 0,
       "velocidade": -20
   },
   "nucleos":{
       "forca": 0,
       "poder": 7,
       "energia": 48,
       "velocidade": -24
   },
   "pernas":{
       "forca": 27,
       "poder": 21,
       "energia": -32,
       "velocidade": 42
   },
   "foguetes":{
       "forca": 0,
       "poder": 28,
       "energia": 0,
       "velocidade": -2
   }
}
//manipulando meu input, para quando clicar chamar as funçoes;
controle.forEach( (elemento) =>{
   elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
      atualizaEstatisticas(evento.target.dataset.peca);
   })
})

//função que faz as operações matematicas em cada peça
function manipulaDados(operação, controle){
   const peca = controle.querySelector("[data-contador]");
   if(operação === "-") {
      peca.value = parseInt(peca.value) - 1;
   } else {
      peca.value = parseInt(peca.value) + 1;
   }
}

// função que junta o objeto peça com os padronizados no objeto peças.
function atualizaEstatisticas(peca){
   estatisticas.forEach( (elemento) =>{
     elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
   })
}
