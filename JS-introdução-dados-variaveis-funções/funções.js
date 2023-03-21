/* 
Funções ou Function: a função existe para isolar certos blocos de código, para ser executado quando necessario.
das diversas formas de ser declarado temos a mais classica, Declaração*/

//termo  //nome    //parametro
function imprime(texto){
    console.log(texto);
}
// chamando a função e dando um texto ao parametro texto.
imprime("Bem vindes a aula de Funções");

/* no Exemplo em cima temos a estrutura padrão sendo o termo Function para declarar a função seguido de um nome e entre seus parenteses, recebe os parametros.*/

/* Método 2 - Return*/

function soma(){
    const resultado = 2 + 2;
}

/* console.log(soma()); */

/* ao executar o trecho a cima, veremos que o console.log mostrara o resposta UNDEFINED, pois estamos sim realizando a operaçao dentro da função soma, pórem nao estamos pedindo
para que o programa retorne esta operação*/

function multiplicação(){
    return 2*2;
}

/* console.log(multiplicação()); */

/* o return neste caso, serve para que mostramos oque esta acontecendo dentro da função. ate porque o objetivo intricico da função é isolar parte do codigo
por isso a utilização do return para exportarmos oque esta dentro para fora :D */ 

/* imprime(multiplicação()); */

// INCEPTION :o sim é possivel uma função chamar outra, muito util para reutilização de algumas funções que sao usadas mtas vezes.

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e teho ${idade} anos`;
}
console.log(nomeIdade(21, "andre"))

// TIPOS DE FUNÇÕES 

/*Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado 
para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros*/

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

/*Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. 
Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa 
(desde que esteja no formato de dado string. */

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')
   
/*Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.
No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar 
uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do 
programa - ou seja, deve ser retornada com o uso da palavra-chave return. */

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

   /*Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o 
   JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2
    se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros 
    de acordo com o dado que a função espera receber - no caso, números.*/

    function operacaoMatematica(numero1, numero2, numero3) {
        return numero1 + numero2 + numero3
       }
       
       operacaoMatematica(15, 30, 45) // 90

    /*Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no 
    momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para 
    executar a função (ou seja, 30, 45, etc).*/