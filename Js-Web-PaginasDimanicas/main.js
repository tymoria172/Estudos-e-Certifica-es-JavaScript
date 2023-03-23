//seleciono TODOS meus elementos com classe tecla e crio uma lista.
const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
  const element = document.querySelector(seletorAudio);

  if (element != null && element.localName === 'audio') {
            element.play();
  } else{
      alert("Elemento ou seleto não Encontrado");
  }

}

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (event) {
    if (event.code == "Space" || event.code == "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
