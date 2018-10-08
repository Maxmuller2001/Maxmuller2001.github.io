/*  1.	Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. 
Wat zijn de namen (keys) van de properties?*/
//const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 
const lapRounds  = {
    hardloper: 'naam hardloper',
    rondetijden: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12] 
}
//De keys hier zijn hardloper en rondetijden.

//  2.	Gegeven is een array met drie objecten:
const teachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
    }
]

/*Gebruik een for-loop of foreach-loop en print voor elk object de regel: 
“I have a [profession] named [name] and he likes to work on a [brand] computer”. 
De vierkante haken zijn placeholders voor de bijbehorende properties uit de objecten hierboven.*/

teachers.forEach(function (element, index, array) {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`)
})

/*  3.	[Pittig]. Gegeven is de array met objecten uit de vorige vraag. Voeg twee properties 
“hoursPerWeek” en “salary” toe. Verzin zelf bijpassende waardes. Voeg nu een methode “salaryPerHour” 
toe, met daarin een functie die print hoeveel de docenten per uur verdienen.*/
const printSalaryPerHour = function () {
    console.log(`${this.name} earns ${this.salaryPerHour} per hour`);
}

const moreTeachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: "35",
        salaryPerHour: "3000",
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: "1",
        salaryPerHour: "50000",
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: "30",
        salaryPerHour: "10",
        printSalaryPerHour: printSalaryPerHour
    }
]