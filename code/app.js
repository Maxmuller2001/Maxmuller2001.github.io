const firstname = "Max";
const lastname = "Muller";
const age = "17";
console.log("hij doet het");
console.log("Mijn voornaam is" + firstname + "Mijn achternaam is" + lastname + "Mijn leeftijd is" + age);

const priceapple = 0.59;
const numberofapples = 200;
const price = priceapple * numberofapples;
console.log(price);

var str = "Please visit the HZ University of applied science";
var res = str.replace("applied", "mad");
console.log(res);


console.log('hij doet het');
let currentAction = 'calculating';
if (currentAction == 'calculating') {
    console.log('in calculating');
} else {
    console.error('help!');
}

if (currentAction == 'calculating') {
    console.log('in Calculating');
    //optellen
    //vermenig
    //aftrekken
    //delen
    const a = 10;
    const b = 11;
    console.log('optellen', a + b);
} else if (currentAction == 'strings') {
    console.log('in strings');
    const myString = 'my string';

} else if (currentAction == 'booleans') {
    console.log('in booleans');
    //punten hoog genoeg
} else {
    console.error('help!');
}

const gewicht = 65;
const lengte = 175;
const bmi = lengte / (gewicht * gewicht);

if (bmi < 18.5) {
    console.log('ondergewicht');
}
else if (bmi > 18.5 && bmi < 24.9) {
    console.log('normaal gewicht');
}
else if (bmi > 25 && bmi < 29.9) {
    console.log('overgewicht');
}
else if (bmi > 30) {
    console.log('obesitas');
}

message = 'Het is eindelijk weekend';
var i = message.length;
while (i >= 0) {
    i--;
    console.log(message.charAt(i));
}

var a = 1;
while (a < 10) {
    a++;
    console.log(a);
}

var name = 'geweldig';
var reversename = '';
var counter = name.length;
while (counter > 0) {
    reversename = reversename + name[counter - 1];
    console.log(reversename);
    counter--;
}

const sentence = 'het is maandag';
// var / let
// var is function scoped
// let is block scoped {}
for (let d = 0; d < sentence.length; d++) {
    console.log(sentence.charAt(d));
}

const gender = true;
function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == true) {
        myNewName = 'casper', 'henk', 'willem';
    }
    else {
        myNewName =
            'leila', 'lisa', 'sarah';
        return giveMeSomeNiceName;
    }
    //console.log('my new name', myNewName);
    return myNewName;
}
const myName = giveMeSomeNiceName('female');
console.log('my new name is:', myName);

function pig(numberOfPigs) {
    for (i = 0; i < numberOfPigs; i++)
        console.log('🐷', 'PIGS!');
}
pig(3);

var pigs = function (numberOfPigs) {
    var pigs = '';
    var counter = 0;
    while (counter <= numberOfPigs) {
        pigs == '🐷';
        counter++;
    }
    pigs += 'KNOR!';
    return pigs;
}
console.log(pigs(4));