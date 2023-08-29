const form = document.getElementById("trans-form")
const selectList = document.getElementById("secSection")
const firstSec = document.getElementById("firstSection")
const turkDiv = document.querySelector(".turkDiv")



function addEventListener(){
form.addEventListener("submit", translateWord);
selectList.onchange = function(){
    //uı
}
}
let translate = new Translate(firstSec.value,language = document.getElementById("secSection").value)
function translateWord(e) {


translate.translateWord();

turkDiv.textContent = firstSec.value

    e.preventDefault();
    
}


addEventListener()