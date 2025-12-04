// ESERCIZIO DEI NUMERI MAGGIORI O UGUALE

/* const number1 = Number(prompt("inserisci il primo numero:"))
const number2 = Number(prompt("inserisci il secondo numero:"))

if (number1 > number2) {
    console.log("il numero maggiore è", number1);
} else if (number1 < number2) {
    console.log("il numero maggiore è", number2);
} else {
    console.log("il numeri sono uguali");
} */



// ESEMPIO CON 3 NUMERI

/* const number1 = Number(prompt("primo numero"))
const number2 = Number(prompt("secondo numero"))
const number3 = Number(prompt("terzo numero"))

if (number1 > number2 && number1 > number3) {
    console.log("il numero maggiore è", number1);

} else if (number2 > number1 && number2 > number3) {
    console.log("il numero maggiore è", number2);

} else {
    console.log("il numero maggiore è", number3);
}  */





// ESERCIZIO CON SOMMA FOR

/* let somma = 0

for (let i = 0; i < 5; i++) {
    const number = Number( prompt("inserisci il numero:"));
    somma += number;
}
console.log("la somma totale è ", somma); */


// ESERCIZIO CON SOMMA WHILE

/* let counter = 0
let sommaWhile = 0

while (counter < 5) {
    const number = parseInt(prompt("inserisci il numero"));
    sommaWhile += number;
    counter ++;
}

console.log("la somma dei numeri è " + sommaWhile); */



// ESERCIZIO CON NUMERO POSITIVO, NEGATIVO O ZERO

const number = Number(prompt("Inserisci un numero:"))

if (number > 0) {
    console.log("il numero maggiore è positivo");

} else if (number < 0) {
    console.log("il numero maggiore è negativo");

} else {
    console.log("Il numero è uguale a zero");
}








