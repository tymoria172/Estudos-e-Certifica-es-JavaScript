// seleciono o elemento pai da tabela de clientes <table> e coloco na var tabela.
var tabela = document.querySelector("table");

/*coloco um escutador de eventos que seleciona quem foi clicado duas vezes, e remove os elementos e informaçoes da classe pai desse elemento,
TARGET.PARENTNODE, coloco uma animação de remoção e dou um tempo para ela acontecer, logo depois, apaga o cliente da tabela.
*/
tabela.addEventListener("dblclick", function(event){
    //verificação para nao excluir o cabeçalho.
    if (event.target.tagName == 'TD') {
        event.target.parentNode.classList.add("fadeOut")
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }

});
