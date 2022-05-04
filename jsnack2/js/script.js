// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

const numbers = [];
let sum = 0;
let userNumber;

do {
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum = sum + userNumber;
    numbers.push(userNumber);
    console.log(numbers);
    console.log(`La somma è ${sum}`);
} while (sum < 50 || isNaN(userNumber)) {    
    console.log(`La somma finale è ${sum - userNumber}`)
    numbers.pop();
    console.log(numbers);
    alert("Non posso sommare quel numero, supererebbe 50!")
}