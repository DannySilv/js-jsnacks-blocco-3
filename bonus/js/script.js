// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = []
const arrayNumber = 10;
while (numbers.length < arrayNumber) {
    let userNumber = genRndNumb(1, 100);
    if (!numbers.includes(userNumber)) {
        numbers.push(userNumber);
    }
}
console.log(numbers);

const container = document.getElementById("container");

const red = document.createElement("div");
red.classList.add("red");
container.append(red);

const green = document.createElement("div");
green.classList.add("green");
container.append(green);

for (i = 0; i < numbers.length; i++) {
    let span = genSpan();
    let thisNumber = numbers[i];
    if (thisNumber % 2 == 0) {
        console.log(`${thisNumber} è pari`)
        span.textContent = ` ${thisNumber} `;
        green.append(span);
    } else {
        console.log(`${thisNumber} è dispari`)
        span.textContent = ` ${thisNumber} `;
        red.append(span);
    }
}


// FUNCTIONS
// FUNCTION 1 - RANDOM NUMBER GENERATOR
function genRndNumb (min, max) {
    const rndNumb = Math.floor(Math.random() * (max - min)) + 1;
    return rndNumb;
}

// FUNCTION 2 - HTML ELEMENT GENERATOR
function genSpan () {
    const span = document.createElement("span");
    return span;
}