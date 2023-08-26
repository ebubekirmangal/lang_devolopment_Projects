// url => "https://translate.yandex.net/api/v1.5/tr.json/translate"
// api key => "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";

// let word = document.getElementById("firstSection").value
// let language = document.getElementById("secSection").value;
// let text = document.getElementsByClassName("text")
// let translateText = document.getElementsByClassName("translateText")
class Translate{
    constructor(word,language){
        this.word = word;
        this.language = language;
        this.apikey = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8"
        this.url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apikey}&text=${word}&lang=${language}`
        this.xhr = new XMLHttpRequest();
    }

    
}

Translate.prototype.translateWord = function(){

}

   
