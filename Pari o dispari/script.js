// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// CHIEDO ALL'UTENTE DI SCEGLIERE TRA PARI O DISPARI
let userChoice = (prompt('Scegli pari o dispari', 'pari')).trim();
console.log(userChoice);

// VALIDO LA SCELTA DELL'UTENTE
if (userChoice !== 'pari' && userChoice !== 'dispari'){
    console.log('La scelta fatta non è valida')
} else {

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '2'));
console.log(userNumber);

// VALIDO IL VALORE SCELYTO DALL'UTENTE
if (userNumber > 5 || isNaN(userNumber)){
    console.log('Il valore inserito non è valido')
} else {

// CREO UN NUMERO RANDOM CON UNA FUNZIONE
function randomNumber (){
    let cpuNumber = 0

    cpuNumber = parseInt(Math.floor(Math.random() * 5) +1);

    return cpuNumber;
}

const cpuNumber = randomNumber();
console.log(cpuNumber);

// SOMMO IL NUMERO DELL'UTENTE CON QUELLO DEL COMPUTER
let sum = (userNumber + cpuNumber)
console.log(sum);

// CONTROLLO SE IL RISULTATO DELLA SOMMA SIA PARI O DISPARI
function isEven (){
    let result = 'dispari'

    if(sum % 2 === 0){
    result = 'pari';
    }

    return result;
}

const result = isEven();
console.log(result);

// CONTROLLO SE LA SCELTA INIZIALE DELL'UTENTE CORRISPONDE AL RISULTATO FINALE E DETERMINO IL VINCITORE
if(userChoice === result){
    console.log('Hai vinto!')
} else {
    console.log('Ha vinto il computer...')
}

}

}