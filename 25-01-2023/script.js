/*### Esercizio 1

Sulla base della lezione del giorno, creare un mock in formato `JSON`.
Riprendere uno degli esercizi passati (es. generatore di una card prodotto),
 eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.*/

import { cE, qS, productCard, priceBarGen } from "./utils.js";
import myJson from "./mock.json" assert { type: "json" };

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
const barContainerEl = cE("div");
barContainerEl.className = "bar_container";

console.log(myJson);

myJson.map((product) => wrapperEl.appendChild(productCard(product)));

/*### Avanzato
Creare un grafico a piacere basato su una api a scelta oppure su un mock costruito ad hoc.*/

// salvo dentro una costante i prezzi dei singoli prodotti.
const priceValue = myJson.map((product) => product.price);

// verifico che pricValue contiene i prezzi.
console.log(priceValue);

// creo un array vuoto dove andrò ad inserire i prezzi filtrati per range.
let priceCount = [];

// inserisco dentro l'array gli oggetti formati da un filter per range di prezzo e da un testo che identifica il range
priceCount.push(
  {
    price: priceValue.filter((price) => price <= 50),
    text: "0 - 50$",
  },
  {
    price: priceValue.filter((price) => price <= 100 && price >= 51),
    text: "50$ - 100$",
  },
  {
    price: priceValue.filter((price) => price <= 500 && price >= 101),
    text: "100$ - 500$",
  },
  {
    price: priceValue.filter((price) => price <= 1000 && price >= 501),
    text: "500$ - 1000$",
  },
  {
    price: priceValue.filter((price) => price <= 2000 && price >= 1001),
    text: "1000$ - 2000$",
  }
);

// attraverso il map eseguo un ciclo della funzione proceGenbar applicata per ogni elemento della di priceCount, infine appendo gli elementi a un div.
priceCount.map((range) =>
  barContainerEl.appendChild(priceBarGen(range.text, range.price.length))
);

const titleEl = cE("h2");
titleEl.textContent = "Product Price Stats";
barContainerEl.append(titleEl);

// appendo tutti gli elementi creati al body
bodyEl.append(barContainerEl, wrapperEl);

console.log(priceCount);
