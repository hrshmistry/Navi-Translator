var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing, for details go to session 4 javascript in browser -> time 2:34:00
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText; // output
    })
    .catch(() => alert("Something wrong with server: try again after some time!"))
}

btnTranslate.addEventListener("click", clickHandler);

