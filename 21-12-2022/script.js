// # Esercizio 1

// Sulla base della lezione del giorno:

// - scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola `bootcamp`;

function myFirstFunction(word) {
  return "coding" + word;
}

let myFavouriteCourse = myFirstFunction(" bootcamp");

console.log(myFavouriteCourse);

// # Esercizio 2

// - scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e
//   per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

const Alessio = {
  name: "Alessio",
  surname: "Perez",
  Height: "170cm",
  age: "31",
  eyes: "neri",
  hair: "neri",
  likeJs: true,
  hobby: function () {
    console.log("i miei hobby sono : musica, cinema e padel");
  },
};

let myname = Alessio.name;

console.log(Alessio);
Alessio.hobby();

// # Avanzato

// - Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

function calculator(operation, num1, num2) {
  if (operation === "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operation === "-") {
    return parseInt(num1) - parseInt(num2);
  } else if (operation === "x") {
    return parseInt(num1) * parseInt(num2);
  } else if (operation === ":") {
    return parseInt(num1) / parseInt(num2);
  }
}

let result = calculator("+", 2, 3);
console.log(result);

// - Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).

// - due array separati per n1 e n2.

function arrayCalc(operation, [n1, n2]) {
  if (operation === "+") {
    return parseInt(n1) + parseInt(n2);
  } else if (operation === "-") {
    return parseInt(n1) - parseInt(n2);
  } else if (operation === "x") {
    return parseInt(n1) * parseInt(n2);
  } else if (operation === ":") {
    return parseInt(n1) / parseInt(n2);
  }
}

let res = arrayCalc("-", [6], [3]);
console.log(res);

// - un unico array per n1 e n2.

function arrayCalc(operation, [n1], [n2]) {
  if (operation === "+") {
    return parseInt(n1) + parseInt(n2);
  } else if (operation === "-") {
    return parseInt(n1) - parseInt(n2);
  } else if (operation === "x") {
    return parseInt(n1) * parseInt(n2);
  } else if (operation === ":") {
    return parseInt(n1) / parseInt(n2);
  }
}

let res2 = arrayCalc("-", [9], [3]);
console.log(res2);
