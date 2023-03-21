/* Observe o código abaixo */
                //passa o parametro
function soma(numero1, numero2) {
    return numero1 + numero2;
}

/* console.log(soma()) */

/*os parametros servem para que neste código o numero1 e numero2 possam ser utilizados diversas vezes e somar QUALQUER número
mas como não funcionou? Pois esquecemos de passar esses valores que são chamados ARGUMENTOS, e como fazer -> */
        // argumento1 argumento2
/* console.log(soma(257, -36)); */

// a ordem de cada parametro tambem tem sua relevância. 

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e teho ${idade} anos`;
}
/* console.log(nomeIdade(21, "andre")) */

// temos que passar a ordem certa de argumentos

function multiplica(num1, num2){
    return num1 * num2;
}

// misturando as funções
console.log(multiplica(soma(5, 5), soma(45, 6)))


