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

// Functions

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

// Arrays
const productlist = []
productlist[0] = 'tandenborstel';
productlist[1] = 'deodorant';
productlist[2] = 'bakmeel';
productlist[3] = 'wortels';
productlist[4] = 'tandpasta';
productlist[5] = 'krop sla';
productlist[6] = 'maggi';
productlist[7] = 'croky chips';
productlist[8] = 'wc papier';
productlist[9] = 'shampoo';

console.table(productlist);

const products = [
    'tandenborstel',
    'deodorant',
    'bakmeel',
    'wortels',
    'tandpasta',
    'krop sla',
    'maggi',
    'croky chips',
    'wc papier',
    'shampoo',
];

/*  .push
    .pop
*/
products.push('frikadel broodjes');
console.table(products);

products.forEach(function (elem, index, myArray) {
    console.log('element', elem);
    console.log('index', index);
    console.log('array', myArray);
});

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element)
}

let newProductArray = [];
// product 0: tandenborstel
// product 1: deodorant
// product 2: bakmeel
// etc

for (let index = 0; index < products.length; index++) {
    const element = 'products: ' + products[index];
    newProductArray.push(element);
    console.table(newProductArray)
}

let newProductsArray = products.map(function (element, index) {
    const newElement = `product ${index + 1}: ${element}`;
    return newElement;
});
console.table(newProductsArray);


const productPrizes = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
// som van alle prijzen
const totalSum = function (anArray) {
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++) {
        totalSum = totalSum + anArray[index];

    }
    return totalSum;
}

console.log(totalSum(productPrizes));

//  hoisting
// function average(){}
const average = function (anArray) {
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
}

console.log(average(productPrizes));

    let me = {
        name: 'Max',
        age: '17',
        previousDiploma: 'Havo',
        vervoersmiddel: 'trein',
        array: [
            'benji',
            'stan',
            'daan',
            'melissa'
        ],
        getal: '4',
    }

   // console.log('Mijn favoriete vervoersmiddel is de', me.vervoersmiddel, 'en die heeft', me.getal, 'wielen.');

    //for (let i = 0; i < me.array.length; i++)
      //  console.log(me.array[i]);
   // me.currentStudy = 'HBO-ICT',
//console.log(me);

let favoritevehicle = function() {
    console.log(`Mijn favoriete vervoersmiddel is ${me.vervoersmiddel} en die heeft ${me.getal} wielen.`);
}

let names = function() {
    for (let i = 0; i < me.array.length; i++)
        console.log(me.array[i]);
}
