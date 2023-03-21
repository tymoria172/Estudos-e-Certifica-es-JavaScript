const nome = 'andre ricardo';
const idade = 23; 
const EnsinoMedio = true;
const vaga = "operador de caixa";

// if(EnsinoMedio === true){
//    console.log(`O Candidato ${nome}, esta aprovado para a vaga de ${vaga}`)
// } else {
//     console.log(`o Candidato ${nome}, esta reprovado para a vaga`)
// }
                            // template string                                     //verdadeiro   // falso - ternarios
const pedidos = `O candidato ${nome}, possui ${idade} anos, com Ensino Médio ${EnsinoMedio ? "completo" : "incompleto "}`;
console.log(pedidos)

console.log(EnsinoMedio ? `aprovado para a vaga de ${vaga}`: `reprovado para a ${vaga}`);