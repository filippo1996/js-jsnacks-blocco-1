//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
//Se uguale lunghezza dire sono uguali e stamparle entrambe. 
/*
var parola1 = prompt('Prima parola');
var parola2 = prompt('Seconda parola');

var lunghezzaParola = 'Hanno la stessa lunghezza ' + parola1 + ' e ' + parola2;

if(parola1.length < parola2.length){
    lunghezzaParola = 'La prima parola è piu corta '+ parola1.length + ' la seconda è più lunga ' + parola2.length;
} else if(parola2.length < parola1.length){
    lunghezzaParola = 'La seconda parola è piu corta '+ parola2.length + ' la prima è più lunga ' + parola1.length;
}

document.getElementById('parola').innerHTML = lunghezzaParola;
*/



/*
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
Variante: stampare solo i numeri pari
*/

//ciclo for
/*
var somm = 0;
for(var i = 0; i < 5; i++){
    var num = parseInt(prompt('inserisci il numero'));
    somm += num;
}

console.log(somm);
document.getElementById('parola').innerHTML = somm;

//variante
var numeriPari = [];
var i = 0;
while(i < 5){
    var num = parseInt(prompt('inserisci il numero'));
    if(num % 2 === 0){
       //somm = num + somm;
       numeriPari.push(num);
    }
    i++;
}

console.log(numeriPari);

for(var i = 0; i < numeriPari.length; i++){
    document.getElementById('numPari').innerHTML += numeriPari[i] + '<br>';
}

*/


/*
 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
*/

/*
var numbers = [];

for(var i = 0; i < 6; i++){
    var number = parseInt(prompt('inserisci il numero'));
    if(number % 2 != 0){
        numbers.push(number);
        document.getElementById('numDispari').innerHTML += number + '<br>';
    }
}

console.log(numbers);
*/
