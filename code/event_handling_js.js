const counter = document.getElementById('counter');
const button = document.getElementById("buttonCounter");
const resetbutton = document.getElementById('reset');
const infoClicker = document.getElementById('infoClicker');
const submit = document.getElementById('submit');
const item = document.getElementById('item');
const prijs = document.getElementById('prijs');

let q = 0;
let buttonScale = 1;
counter.innerText = q;
function clickEventHandler(event) {
    q++;
    counter.innerText = q;
    infoClicker.innerText = '+1';
    console.log(q);

    if (q == 10 || q == 20) {
        buttonScale -= 0.15;
        button.style.transform = `scale(${buttonScale})`;
        infoClicker.innerText = 'The button shrinked!';
        console.log('The button shrinked!');

    }
    if (q == 21) {
        q = 0;
        counter.innerText = q;
        buttonScale = 1;
        button.style.transform = `scale(${buttonScale})`;
        infoClicker.innerText = 'The button has been reset!';
        console.log('The button has been reset!', (q));
    }
}

function resetButtonHandler(event) {
    q = 0;
    counter.innerText = q;
    buttonScale = 1;
    button.style.transform = `scale(${buttonScale})`;
    infoClicker.innerText = 'The button has been reset!';
    console.log('The button has been reset!', (q));
    console.log('submit');
}

/*function formHandler(event) {
console.log(item.value);
console.log(prijs.value);
}*/

resetbutton.addEventListener('click', resetButtonHandler);
button.addEventListener("click", clickEventHandler);


