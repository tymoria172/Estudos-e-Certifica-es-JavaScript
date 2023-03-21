var pacientes = document.querySelectorAll(".paciente");

// repitindo o meu calculo em cada paciente

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]; // meu paciente nada mais é do que meu paciente no indice [i]

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;
  var tdimc = paciente.querySelector(".info-imc");

  // validando

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  // verifica se o peso é valido
  if (!pesoEhValido) {
    console.log("Peso invalido");
    pesoEhValido = false;
    tdimc.textContent = "Peso invalido"; // muda o conteudo de imc para invalido
    paciente.style.backgroundColor = "red"; // função que muda a cor da linha
  }

  //verifica se a altura é valida
  if (!alturaEhValida) {
    console.log("Altura invalida");
    alturaEhValida = false;
    tdimc.textContent = "altura invalida";
    paciente.classList.add("paciente-invalido"); // função que muda a classe do meu paciente para outra setada no index.css
  }

  //verifica se tudo for valido, entao faça o calculo do imc
  if (pesoEhValido && alturaEhValida) {
    var imc = calculaIMC(peso, altura);
    tdimc.textContent = imc; 
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  } else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  } else{
    return false;
  }
}

function calculaIMC(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2); //função que define o numero de casas decimais
}