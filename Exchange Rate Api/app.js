let amount = document.querySelector("#input")
let current = document.querySelector("#current")
let resultAmount = document.querySelector("#resultAmount")
let nextCurrency = document.querySelector("#select")

document.querySelector('.form').addEventListener('submit', function(event) {
    const value =current.value;
    getApi(value)
    event.preventDefault();});


const getApi = async (nextM)=>{
    const apiKey = "877365f183c239a6b820e644"
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${nextM}`
    const response = await fetch(url);
    const data = await response.json();
    resultAmount.value = "  " + amount.value*data.conversion_rates[nextCurrency.value]
    
}

