var campoFiltro = document.querySelector("#filtrar-tabela");
var tdNome = document.querySelector(".info-nome");
var pacientes = document.querySelectorAll(".paciente");

campoFiltro.addEventListener("input", function () {
  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressão = new RegExp(this.value, "i");
      if (!expressão.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
    }
  }
});
