/* terceira forma de se escrever uma função*/

function apresentar(nome){
    return `Bom dia, meu nome é ${nome}!`;
}
/* 
console.log(apresentar("André")) */

 /* escrevendo como arrowFunction*/

 const apresentarArrow = nome => `Bom dia, meu nome é ${nome}!` 
 
 console.log(apresentarArrow('Lucimar'))

 /* como nossa função so tinha um parametro e 1 linha de codigo de execução, nao foi necessario colocar os parametros
 em () e ter um return sobre chaves*/

 // com mais de um parametro 

 const soma = (num1, num2) => num1 +  num2;

 console.log(soma(5, 9));

 // necessitando return e chaves

 const somaNumerosPequenos = (numero1, numero2) => {
  if (numero1 > 10 || numero2 > 10){
    return `Somente numeros de 1 a 9`;
  }
  else{
    return numero1 + numero2;
  }
 }
 
 console.log(somaNumerosPequenos(7, 1));