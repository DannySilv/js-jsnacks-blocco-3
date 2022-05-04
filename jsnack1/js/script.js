// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const numbers1 = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = [8, 9, 10];

if (numbers1.length < numbers2.length) {
    while (numbers1.length !== numbers2.length) {
        let rndNumb = genRndNumb(1, 100)
        numbers1.push(rndNumb)
    }
} else if (numbers1.length > numbers2.length) {
    while (numbers1.length !== numbers2.length) {
        let rndNumb = genRndNumb(1, 100)
        numbers2.push(rndNumb)
    }
}   
console.log(numbers1, numbers2);


// FUNCTIONS
// FUNCTION 1 - RANDOM NUMBER GENERATOR
function genRndNumb (min, max) {
    const rndNumb = Math.floor(Math.random() * (max - min)) + 1;
    return rndNumb
}