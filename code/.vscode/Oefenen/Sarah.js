// global variables
const product = {
  prijs: 9.99,
  merk: 'Robijn',
  img: './assets/img/wasmiddel.png'
}

// wait until window is loaded
window.addEventListener("load", init);

/**
* function to initialize the website
* @param {event} - event
*/
function init(event) {
}






//output tekst aanmaken
let outputText = document.getElementById('message')


var inputAnswer = document.getElementById('price').value;


function checkAnswer(){
  // if else statement om te checken of de input overeenkomt met de tekst op het scherm
  // tekstvak is een HTML element (console log die maar en daardoor kun je die niet vergelijken met arrayBinary[0], met deze opzet kun je hem ook weglaten)
  if (inputAnswer.value == '1') {
  outputText.innerHTML = 'Dat is een EEN'
} else {
  outputText.innerHTML = 'Probeer het nog eens...'
}
}



//input tekstvak ophalen dmv een functie
function clickFormHandler(event){
  event.preventDefault()
  var inputAnswer = document.getElementById('price').value;
  console.log(inputAnswer);
  checkAnswer();
}


// button maken van submit
let userSubmit = document.getElementById("submit").addEventListener("click", clickFormHandler)