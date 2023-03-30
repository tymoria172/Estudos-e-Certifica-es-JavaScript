//enviando requisição para a api de cotação 
async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    //traduzindo o json
    const result = await conecta.json();
    postMessage(result.USDBRL);
}

//Quando a mensagem do script workerDolar.postMessage() for enviada e o eventListener recebê-la, faremos a conexão com a API para mostrar os dados e entraremos no intervalo de tempo setInterval() para repetir a chamada da API a cada 5 segundos.

addEventListener("message", ( )=> {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})