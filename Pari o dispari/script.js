// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice = prompt('Scegli pari o dispari', 'pari');
console.log(userChoice);

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '2'));
console.log(userNumber);

const cpuNumber = parseInt(Math.floor(Math.random() * 5) +1);
console.log(cpuNumber);

let sum = (userNumber + cpuNumber)
console.log(sum);

let result = 'dispari'

if(sum % 2 === 0){
    result = 'pari';
}

console.log(result);

if(userChoice === result){
    console.log('Hai vinto!')
} else {
    console.log('Ha vinto il computer...')
}