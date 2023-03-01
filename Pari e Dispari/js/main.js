// FUNZIONE PER GENERARE UN NUMERO INTERO RANDOM 
// min è il valore minimo che si vuole avere 
// max è il valore massimo che vuole avere 
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONE PER VERIFICARE SE LA SOMMA DI DUE NUMERI SIA PARI
// come input bisogna dare i 2 valori che si vogliono paragonare 
// restituisce 'pari' nel caso sia pari e 'dispari' nel caso del sispari 
function pariVerification(num1,num2){
    const total = Number(num1) + Number(num2);
    if(total % 2 === 0){
        console.log('La somma dei numeri è pari');
        return ('pari');
    }else{
        console.log('La somma dei numeri è dispari');
        return ('dispari');
    }
}

const sceltaPariDispariUser =prompt('pari o dispari?(p/d)');
console.log('Hai scelto: '+sceltaPariDispariUser);

const sceltaNumeroUser = prompt('Numero da 1 a 5');
console.log('Hai scelto il numero: '+sceltaNumeroUser);

const sceltaNumeroCpu = randomNumber(1,5);
console.log('Il pc ha scelto: '+sceltaNumeroCpu);

confronto = pariVerification(sceltaNumeroUser,sceltaNumeroCpu);

// CHI VINCE?
if ((confronto === 'pari' && sceltaPariDispariUser === 'p') || (confronto === 'dispari' && sceltaPariDispariUser === 'd')) {
    console.log("Hai vinto!");
    alert("Hai vinto!");
  } else {
    console.log("Hai perso!");
    alert("Hai perso!" );
  }