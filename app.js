var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

function clickHandler(){
    textOutput.innerHTML = "output: " + textInput.value;
}

btnTranslate.addEventListener("click", clickHandler)