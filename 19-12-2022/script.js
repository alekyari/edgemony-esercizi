//Richiesta operazione
let Operation = prompt("Ciao! quale operazione vuoi svolgere?");

//Richiesta primo numero
let firstNumber = prompt("Perfavore inserisci il primo numero");

//Trasformazione da stringa a numero
let numFirstNumber = parseInt(firstNumber);

//Richiesta secondo numero
let secondNumber = prompt("Perfavore inserisci il secondo numero");

//Trasformazione da stringa a numero
let numSecondNumber = parseInt(secondNumber);

//Assegnazione varibaile che conterrà il risultato
var result = "";

if (
  //Eseguo la somma
  Operation === "+" ||
  Operation === "Addzione" ||
  Operation === "addizione"
) {
  result =
    "La somma è: " +
    firstNumber +
    "+" +
    secondNumber +
    " = " +
    firstNumber * secondNumber;
} else if (
  //Eseguo la differenza
  Operation === "-" ||
  Operation === "Sottrazione" ||
  Operation === "sottrazione"
) {
  result =
    "La differenza è: " +
    firstNumber +
    "-" +
    secondNumber +
    " = " +
    (firstNumber - secondNumber);
} else if (
  //Eseguo il prodotto
  Operation === "*" ||
  Operation === "Moltiplicazione" ||
  Operation === "moltiplicazione"
) {
  result =
    "Il prodotto è: " +
    firstNumber +
    "*" +
    secondNumber +
    " = " +
    firstNumber * secondNumber;
} else if (
  //Eseguo il quoziente
  Operation === "/" ||
  Operation === "Divisione" ||
  Operation === "divisione"
) {
  result =
    "Il quoziente è: " +
    firstNumber +
    ":" +
    secondNumber +
    " = " +
    firstNumber / secondNumber;
} else {
  //Avviso di errore
  alert("mi dspiace ma " + Operation + " non è una operazione valida");
}
//Prompt con il risultato più stampa sulla console
alert(result);
console.log(result);
