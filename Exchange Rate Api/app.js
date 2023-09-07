// let amount = document.querySelector("#input")
// let current = document.querySelector("#current")
// let resultAmount = document.querySelector("#resultAmount")
// let nextCurrency = document.querySelector("#select")
// let hthree = document.querySelector(".h3")
// document.querySelector('.form').addEventListener('submit', function(event) {
//     const value =current.value;
//     getApi(value)
//     changeConfig()
//     event.preventDefault();});

//     const changeConfig = async ()=>{
//         const newEl =  document.createElement("h3");
//         hthree.innerHTML = `
      
//         `
//         newEl.style = "text-align: center;"
//         newEl.innerHTML = `${amount.value} ${current.value} ${resultAmount.value} ${nextCurrency.value}`
//         hthree.appendChild(newEl)
//     }
    
// const getApi = async (nextM)=>{
//     const apiKey = "877365f183c239a6b820e644"
//     const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${nextM}`
//     const response = await fetch(url);
//     const data = await response.json();
//     resultAmount.value = "  " + amount.value*data.conversion_rates[nextCurrency.value].toFixed(2)

// }

let amount = document.querySelector("#input");
let current = document.querySelector("#current");
let resultAmount = document.querySelector("#resultAmount");
let nextCurrency = document.querySelector("#select");
let hthree = document.querySelector(".h3");

document.querySelector('.form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const value = current.value;
    const newAmount = await getApi(value);
    resultAmount.value = newAmount.toFixed(2); 
    changeConfig();
});

const changeConfig = () => {
    hthree.innerHTML = `<h3 style="text-align:center;">${amount.value} ${current.value} ${resultAmount.value} ${nextCurrency.value}</h3>`;
};

const getApi = async (nextM) => {
    const apiKey = "877365f183c239a6b820e644";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${nextM}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return amount.value * data.conversion_rates[nextCurrency.value];
    } catch (error) {
        console.error("API isteği sırasında bir hata oluştu: ", error);
        return 0;
    }
};