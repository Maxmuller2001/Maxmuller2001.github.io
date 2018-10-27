// stap 1: array maken met de binaire codes
// stap 2: de array naar het tekstvak schrijven
// stap 3: output tekst aanmaken
// stap 4: if else statement maken om te checken of de /* input */ klopt met de output
// stap 5: input user van het tekstvak ophalen met een functie

// array maken met de binaire codes:
var arrayBinary = ['01101000 01100001 01101100 01101100 01101111',
'01010111 01100101 01101100 01101011 01101111 01101101',
'01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
'01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011'] 

// de array naar het tekstvak schrijven
let tekstVak = document.getElementById('questionText').innerHTML = arrayBinary[0]

//output tekst aanmaken
let outputText = document.getElementById('answerText');

//input tekstvak ophalen dmv een functie
function clickFormHandler(event){
  event.preventDefault()
  var inputAnswer = document.getElementById('inputAnswer').value;
  console.log(inputAnswer);
}

// button maken van submit
let userSubmit = document.getElementById("submit").addEventListener("click", clickFormHandler)

// if else statement om te checken of de input overeenkomt met de tekst op het scherm
if (tekstVak == arrayBinary[0] && inputAnswer.value == 'hallo') {
  outputText.innerHTML = 'Je antwoord hallo is helemaal goed!'
} else if(tekstVak == '01010111 01100101 01101100 01101011 01101111 01101101' && inputAnswer == 'welkom') {
  outputText.innerHTML = 'Je antwoord welkom is helemaal goed!'
} else if(tekstVak == '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011' && inputAnswer == 'tot ziens') {
  outputText.innerHTML = 'Je antwoord tot ziens is helemaal goed!'
} else if(tekstVak == '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011' && inputAnswer == 'groetjes') {
  outputText.innerHTML = 'Je antwoord groetjes is helemaal goed!'
} else {
  outputText.innerHTML = 'Probeer het nog eens...'
}