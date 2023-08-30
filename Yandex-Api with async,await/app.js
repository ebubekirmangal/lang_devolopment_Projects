const form = document.getElementById("trans-form");
const selectList = document.getElementById("secSection");
const firstSec = document.getElementById("firstSection");
const chooseText = document.querySelector(".chooseText2")
const button = document.getElementById("but");
const chooseFlag = document.querySelector(".chooseFlag")
const div1 = document.querySelector(".div1")
const text = document.querySelector(".text2")




const getWord =async  (w,k)=> {
        const apikey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apikey}&text=${w}&lang=${k}`;
        const response = await fetch(url);
        const data = await response.json();
        chooseText.textContent = data.text[0];
    }


addEventListener();

function addEventListener() {
    form.addEventListener("submit", translateWord);
    selectList.onchange = function () {
        changeFlag();
        changeInfo();
    };
}

function translateWord(e) {
    

    const word = firstSec.value;
    const key = selectList.value;

    getWord(word,key);

    

    text.textContent = firstSec.value;
    
    firstSec.value = "";
    e.preventDefault();
}


const flags = {
    en: "img/british2.jpg",
    de: "img/deuts.jpg",
    es: "img/espanyol.jpg",
    fr: "img/french.jpg",
    ru: "img/rus.jpg",
    ae: "img/arabic.jpg"
}
const langs = {
    en: "İngilizce",
    de: "Almanca",
    es: "İspanyolca",
    fr: "Fransızca",
    ru: "Rusça",
    ae: "Arapça"
}


const changeFlag = ()=>{

    const cc = selectList.value
    chooseFlag.innerHTML = "";
    const imgDiv = document.createElement("img")
    imgDiv.src = flags[cc];
    chooseFlag.appendChild(imgDiv)
}

const changeInfo = ()=>{
    const cc = selectList.value
    div1.innerHTML = "";
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("chooseInfo")
    infoDiv.innerHTML = langs[cc];
    div1.appendChild(infoDiv)
}
window.onload = function () {
    changeFlag();
    changeInfo();
};

