//1 Maak een while loop die kijkt of in een reeks getallen deelbaar zijn door 4.

var i = 0;
while (i <= 10) {
    if (i % 4 == 0) {
        console.log(i, ' is deelbaar door 4');
        i++;
    } else {
        console.log(i, 'is niet deelbaar door 4')
        i++;
    }
}

//2 Schrijf een berekening van een Fibonacci reeks met while loop. 
var a = 0;
var b = 1;
var c = 0;
while (c < 89) {
    c = a + b;
    a = b;
    b = c;

    console.log(c);
}
// 3.	Gegeven is een array[2, 4, 8, 9, 12, 13] gebruik een for-loop om al deze getallen bij elkaar op te tellen. 

var array = [2, 4, 8, 9, 12, 13];
var q = 0;
var len = array.length;
for (v = 0; v < len; v++) {
    q = q + array[v]
}
console.log('de getallen bij elkaar geteld:', q);

