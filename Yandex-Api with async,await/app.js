const form = document.getElementById("trans-form")
const selectList = document.getElementById("secSection")


function addEventListener(){
form.addEventListener("submit", translateWord);
selectList.onchange = function(){
    //uı
}
}
let translate = new Translate(document.getElementById("firstSection").value,language = document.getElementById("secSection").value)
function translateWord(e) {


translate.translateWord();

    e.preventDefault();
    
}


addEventListener()