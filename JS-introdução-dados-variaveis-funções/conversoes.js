// tipo de booleano 
//  booleanos 

// conversão implicita permite a conversão de um dado para o outro. 
// no  JavaScript quando utilizamos o == acontece a conversao de um dado por exemplo a variavel numero tipo numerica
// com a variavel numeroString do tipo string, ele converte as duas em string, tomar cuidado para nao acontecer bugs, neste exemplo
//o codigo vai concatenar as duas string, saindo o resultado = 555555


/* const numero = 555;    
const numeroString = "555";

console.log( numero + numeroString) */

// conversão explicita 
/*A conversao explicita ocorre quando utilizamos neste caso o termo Number() e dentro dele a variavel é transformada para numero. 
para se tornar string podemos utilizar o String() ou .toString()*/

const numero = 555;    
const numeroString = "555";

console.log( numero + Number(numeroString))