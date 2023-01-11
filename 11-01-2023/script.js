/* ## Esercizio 1

Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini,
testo o titoli, indispensabile pero aggiungere un button con una X come testo.

Aggiungere un evento al cui click del mouse sulla class intera:

- Cambi il colore del testo di tutta la card

Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - 
Elimini la card stessa*/

function changeCardBg() {
  document.querySelector(".card").style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  nBackGroundGenerated++;

  if (nBackGroundGenerated >= 5) {
    alert("Attenzione, hai superato il limite massimo di sfondi!");
    cardEl.removeEventListener("click", changeCardBg);
  }
  return console.log("cambio sfondo card");
}

function eraseCard() {
  document.querySelector(".card").remove();
  alert("Hai rimosso la card, ricarica la pagina per visualizzarla di nuovo");

  cardErased++;

  if (cardErased >= 1) {
    cardEl.removeEventListener("click", eraseCard);
  }
  return console.log("card rimossa con successo");
}

const cardEl = document.querySelector(".card");

let nBackGroundGenerated = 0;

let cardErased = 0;

cardEl.addEventListener("click", changeCardBg);

const btnClickEl = document.querySelector(".button");

btnClickEl.addEventListener("click", eraseCard);

/*## Esercizio 2

Completare la funzione quoteGen al fine di avere
 delle quotes che mostrino tanto il testo che l'autore del testo stesso.*/

function quoteGen(quoteText) {
  const quoteEl = document.createElement("div");
  const textEl = document.createElement("p");
  const quoteListEl = document.querySelector(".quote-list");

  quoteEl.className = "quote";
  textEl.textContent = quoteText;

  quoteEl.appendChild(textEl);
  quoteListEl.appendChild(quoteEl);
}

const quotes = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
];

//prova riscrittura array

const newQuotes = [];

function Concat() {
  for (let i = 0; i < quotes.length; i++) {
    newQuotes.push(quotes[i].quote);
  }
  for (let i = 0; i < quotes.length; i++) {
    newQuotes.push(quotes[i].author);
  }
  return newQuotes;
}

Concat();

console.log(newQuotes);
//prova riscrittura array

quotes.forEach((item) => quoteGen(item.quote));

// non sono riuscito ad inserire nello stesso elemento descrizione e autore.
