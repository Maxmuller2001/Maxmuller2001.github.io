/* Opdracht 1
Schrijf een simpele statement die aangeeft of een getal even of oneven is.*/
var getal = 4;
if (getal % 2 == 0) {
    console.log('het getal is even');
}
else {
    console.log('het getal is oneven');
}

/* Opdracht 2
Ik wil graag in de volgende string ‘Programming is not so cool’ 
het woordje ‘not’ verwijderen. Schrijf een programma dat dit doet.*/
var str = "Programming is not so cool";
var res = str.replace("not", "");
console.log(res);

/* Opdracht 3
Vergelijk de waarden ‘1400’ met de string ‘Ik woon in Naboo’. 
Programmeer deze opdracht en geef aan (met commentaar in je code) 
waarom dit niet een slimme vraag is. */
str = 'Ik woon in Naboo';
var waarde = 1400;
if (waarde = str); {
    console.log('Naboo is 1400')
}

/* Dit is niet slim omdat de zin Ik woon in Naboo geen getal is. 
En het is niet logisch om zo'n waarde er aan toe te kennen. */


