var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
    return serverURL+"?text="+text
}

function errorHandler(error){
    console.log("Some error occured", error);
    window.alert("Some error occured.. please try after some time", error);
    
}


function clickHandler(){
    // textOutput.innerHTML = "output: " + textInput.value;
    var urlToFetch = constructURL(textInput.value)
    fetch(urlToFetch)
    .then(response => response.json())
    .then(json => {
        // if(json.error.code == 429){
        //     errorText = json.error.message;
        //     textOutput.innerHTML = errorText;
        // }else{
            console.log(json)
            var translatedText = json.contents.translated;
            textOutput.innerHTML = translatedText;    
        // }
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)