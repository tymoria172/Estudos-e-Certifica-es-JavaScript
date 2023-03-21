var Botao = document.querySelector("#adicionar-paciente");
Botao.addEventListener("click", function (event) {
  event.preventDefault();

  /* dentro de Form, existem os inputs altura, peso, gordura, etc. Estamos acessando atravez do (.)altura
    (.)value mostra o valor dentro de altura*/

  var form = document.querySelector("#form-adiciona");

  // pega o paciente
  var paciente = obtemFormDoPaciente(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagenErro = document.querySelector("#mensagem-erro");
  //remove minhhas mensagens de erro apos ser enviado o paciente valido
  mensagenErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  //Criando o elemento TR do html
  var pacienteTR = montaTr(paciente);
  //Adiciona na tabela o paciente
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTR);
}

function exibeMensagensDeErro(erros) {
  //recebe os elementos com ID mensagem-erro
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
  //para cada erro, do meu array de erros, faça uma função
  erros.forEach(function (erro) {
    // cria o li
    var li = document.createElement("li");
    // preenche com o erro
    li.textContent = erro;
    // e coloca como filha de ul
    ul.appendChild(li);
  });
}

//criando um objeto paciente, com seus dados
function obtemFormDoPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  // criando a TR - elementos html do meu formulario
  var pacienteTR = document.createElement("tr"); //pai
  pacienteTR.classList.add("paciente");
  //adicionando uma classe no elemento hmtl pacienteTR

  // Criando as TDS e colocando elas como filhas de TR
  pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTR;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco!!");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco!!");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco!!");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco!!");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é invalido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é invalida");
  }

  return erros;
}
