//  1.	Zet de uitwerking van de Fibonacci getallenreeks uit de vorige les om in een functie.

function calcFibonacci(a = 0, b = 1, c = 0) {
    while (c < 89) {
        c = a + b;
        a = b;
        b = c;
        console.log(c, 'sdfkjdsdb');
    }
}
