addEventListener("message", event =>{
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})

async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/JPY-BRL')
    const response = await conecta.json();
    postMessage(response.JPYBRL);
}

