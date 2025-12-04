const number1 = Number(prompt("inserisci il primo numero:"))
const number2 = Number(prompt("inserisci il secondo numero:"))

if (number1 > number2) {
    console.log("il numero maggiore è", number1);
} else if (number1 < number2) {
    console.log("il numero maggiore è", number2);
} else {
    console.log("il numeri sono uguali");
}