var btnTranslate=document.querySelector("#button");
var txtInput=document.querySelector("#input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?"+"text="+text;
}

function ErrorHandler(error){
    console.log("error occured");
}

function clickEventHandler(){
   

   var inputTxt=txtInput.value;

   fetch(getTranslationURL(inputTxt))
   .then((response)=>response.json())
   .then((json)=>{
    var translatedTxt=json.contents.translated;
    outputDiv.innerText=translatedTxt;})
    .catch(ErrorHandler)
}
btnTranslate.addEventListener("click",clickEventHandler )