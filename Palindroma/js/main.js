'use strict'

// FUNZIONI

// FUNZIONE CHE RUOTA UNA PAROLA DI INPUT
function ruotaParole(parola){
    let parolaReverse = '';
    for(let i = parola.length - 1; i >= 0; i--){
        parolaReverse += parola[i];
    }
    return parolaReverse;
}

// FUNZIONE CHE CONTROLLA CHE DUE PAROLE SIANO UGUALI 
function equalityCheck (parola1,parola2){
    if(parola1 === parola2){
        console.log('parola palindroma');
        return true;
    }else{
        console.log('parola non palindroma');
        return false;
    }
}





// DEFINISCO L'INPUT 
const parola = prompt(' Inserisci una parola');

// RUOTO LA PAROLA DI INPUT E LA STAMPO
const parolaReverse = ruotaParole(parola);
console.log('Se ribaltiamo la parola diventa:'+parolaReverse);

// ESEGUO IL CONFRONTO
console.log(equalityCheck(parola,parolaReverse));