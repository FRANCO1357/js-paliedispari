// 1. chiedere all'utente una parola
// 2. invertire la parola all'interno di una funzione
// 3. invertire la parola con un ciclo for 
// 4. partendo dall'ultima lettera della parola riordinare dall'ultima alla prima
// 5. controllare se la parola invertita è uguale a quella iniziale
// 6. stampare in console in base al risultato

const word = prompt('Scrivi una parola', 'radar')

function isPalindroma (){
    let result = '';

    for (let i = word.length -1; i >= 0; i--){
        result += word[i];
    }

    return result;
}

const reverseWord = isPalindroma(word);
console.log(reverseWord);


if (reverseWord === word){
    console.log('La parola è palindroma')
} else {
    console.log('La parola NON è palindroma')
}