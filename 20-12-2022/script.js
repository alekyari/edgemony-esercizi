//  # Esercizio 1

//   Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta,
//   rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (`prompt`)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

//  --Svolgimento--

//  Assegno un array vuoto

let city = [];

//  Imposto un ciclo for con indice i con incremento unitario fino al raggiungimento di i < 10,
//  il codice da eseguire n volte sarà un metodo push all'array 'city' che inserisce di volta in volta le stringhe provenienti dal prompt.

for (let i = 0; i < 10; i++) {
  city.push(prompt("Ciao! Inserisci le tue 10 città preferite nel mondo"));
}

//  Stampo in console il contenuto di city.

console.log(city);

// # Avanzato

// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`e `for of`)

//  --Svolgimento--

//  ciclo for in, stampo gli indici delle 10 stringhe di 'city'

for (let cityIndex in city) {
  console.log(cityIndex);
}

//  ciclo for of, stampo gli le 10 stringhe di 'city'

for (let cityName of city) {
  console.log(cityName);
}
