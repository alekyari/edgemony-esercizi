/*## Esercizio 1

Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

> nb. ogni singola operazione sara una arrow function

Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare.
Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.*/

//----------------------SVOLGIMENTO-------------------

// scrivo le 4 operazioni sotto forma di arrow function:

const Sum = (firstNum, secondNum) => firstNum + secondNum;
const Sub = (firstNum, secondNum) => firstNum - secondNum;
const Mul = (firstNum, secondNum) => firstNum * secondNum;
const Div = (firstNum, secondNum) => firstNum / secondNum;

console.log(Div(3, 3));

//scrivo la funzione "calculator" che richiama le 4 arrrow function scritte sopra.

function calculator() {
  //richiesta operazione
  let chooseOperation = prompt(
    "Ciao! scegli un'operazione fra 'addizione', 'sottrazione', 'moltiplicazione' e 'divisione'"
  );

  //richiesta primo numero
  let firstNumber = prompt("Perfavore inserisci il primo numero");

  //trasformo in numero firstNumber
  let parsFirstNumber = parseInt(firstNumber);

  //richiesta secondo numero
  let secondNumber = prompt("Perfavore inserisci il secondo numero");

  //trasformo in numero firstNumber
  let parsSecondNumber = parseInt(secondNumber);

  //assegnazione varibaile che conterrà il risultato
  let result = "";

  //uso uno swtich per includere le 4 operazioni:
  switch (chooseOperation) {
    case "addizione":
      result = Sum(parsFirstNumber, parsSecondNumber);
      break;
    case "sottrazione":
      result = Sub(parsFirstNumber, parsSecondNumber);
      break;
    case "moltiplicazione":
      result = Mul(parsFirstNumber, parsSecondNumber);
      break;
    case "divisione":
      result = Div(parsFirstNumber, parsSecondNumber);
      break;
    default:
      alert(`mi dispiace ma ${chooseOperation} non è un'operazion valida`);
  }
  return (result =
    "addizione" || "sottrazione" || "moltiplicazione" || "divisione"
      ? alert(`ìl risultato è ${result}`)
      : null);
}

// invoco la funzione calculator
calculator();

/* ## Avanzato

Provare a completare l'esercizio sopra applicando qualche callback.
Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback. */

// la funzione creata sopra richiama già le 4 funzioni create precedentemente con 4 callback
