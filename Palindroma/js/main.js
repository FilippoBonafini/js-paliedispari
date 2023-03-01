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

// FUNZIONE CHE SCRIVA NELL'HTML IL RISULTATO
function printHTML (dove,cosa){
    dove.innerHTML=(cosa);
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
const parola = document.getElementById('input');
// DEFINISCO IL BOTTONE DI OK 
const okButton = document.getElementById('conferm');
// DOVE SCRIVERE IL RISULTATO
const result = document.getElementById('result');



okButton.addEventListener('click',
    function(){
        const valueParola = parola.value;
        const valueParolaReverse = ruotaParole(valueParola);
        if(equalityCheck(valueParola,valueParolaReverse)===true){
            printHTML(result,'Palindroma');
        }else{
            printHTML(result,'Non palindroma');
        }
    }
)

