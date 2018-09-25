/* Opdracht 1
Maak een if-else statement die checkt of iemand een 
onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.*/

//(onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).

var cijfer = 8;
if (cijfer < 6) {
    console.log('onvoldoende');
}
else if (cijfer > 6 & cijfer < 7) {
    console.log('voldoende');
}
else if (cijfer > 7 & cijfer < 9) {
    console.log('goed');
}
else if (cijfer > 9) {
    console.log('uitmuntend');
}

/* Opdracht 2
Maak opdracht 1 nu met behulp van het switch statement.*/
var cijferswitch = 4;
switch (cijferswitch) {
    case 9:
        console.log("uitmuntend");
    case 8:
        console.log("goed");
        break;
    case 7:
        console.log("goed");
        break;
    case 6:
        console.log("voldoende");
        break;
    default:
        console.log('onvoldoende');
}
/* Opdracht 3
3.	Gegeven is de bovenstaande codesnippet. Maak een if-else statement 
die de waarden van de variabelen checkt.*/
/*purchasedBook = true;
job = ‘teacher’;
inTrain = false;
*/
var purchasedBook = true;
var teacher = true;
var inTrain = true;

if (teacher == false) {
    console.log('I am not a teacher');
}
else if (teacher == true) {
    console.log('I am a teacher');
}
if (inTrain == false) {
    console.log('I am not in the train');
}
else if (inTrain == true) {
    console.log('I am in the train');
}
if (purchasedBook == false) {
    console.log('The book is not purchased');
}
else if (purchasedBook == true) {
    console.log('The book is purchased');
}

if (teacher == true && inTrain == true && purchasedBook == true) {
    console.log('finally i can enjoy my book!');
}