import { qS, cE, quoteCard, quoteCard2 } from "./utils.js";
import { GET, GET2, randomID } from "./api.js";

const bodyEl = qS("body");

const containerEl = cE("div");
containerEl.className = "container";

bodyEl.appendChild(containerEl);

const button = qS("#button");
const loaderElement = document.querySelector(".loader");

/* ### Esercizio 1

Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando `ASYNC` / `AWAIT`) che effettui una chiamata al seguente endpoint: `https://dummyjson.com/quotes`.

- Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1.
  Per qulunque riferimento utilizzare la documentazione presente al seguente indirizzo: https://dummyjson.com/ */

// ho usato la funzione fetch classica per caricare una quote

/* fetch("https://dummyjson.com/quotes/7")
  .then((res) => res.json())
  .then((data) => {
    containerEl.append(quoteCard(data));
  });
*/

// Ho generato la card con la funzione get creata nel file api.js

GET("quotes", "7").then((data) => containerEl.appendChild(quoteCard(data)));

/*### Avanzato

Sulla base dell'esercizio 1, riadattare il proprio codice al fine di prevedere anche un pulsante al cui click su di esso, venga generata una nuova quote, in modo del tutto random.*/

button.addEventListener("click", () => {
  loaderElement.classList.add("loading");
  alert(`This is the new random quote!`);
  containerEl.innerHTML = "";
  GET2("quotes").then((data) =>
    containerEl.appendChild(quoteCard2(data, randomID(99) + 1))
  );
  loaderElement.classList.remove("loading");
});
