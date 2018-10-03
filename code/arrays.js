// 1.	Maak een functie die random een element uit de volgende array retourneert.
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
const randomItem = lapRounds[Math.floor(Math.random() * 8)];
console.log(randomItem);

// 2.	Gegeven is de volgende 2-dimensionale array van al mijn platen:
i = 0;
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

//Console.log alle waarden uit deze 2-dimensionale array. Tip: gebruik een dubbele loop.
for (let i = 0; i <= 1; i++) {
    for (let i2 = 0; i2 <= 2; i2++) {

        console.log(i, i2)
        console.log(allMyRecords[i][i2])
    }
}

/* 3. Gebruik de .filter functie uit javascript om precies hetzelfde resultaat
 te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.
 
 const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }*/

const filteredLapRounds = lapRounds.filter(lapRound => lapRound < 4);
console.log(filteredLapRounds);