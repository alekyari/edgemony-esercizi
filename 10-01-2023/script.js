/*## Esercizio 1

Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript. Devo essere presenti i seguenti elementi:

- Image di sfondo
- Un titolo principale
- Un sottotitolo descrittivo breve */

// creo una arrow function che genera hero

const createHero = ({ img, title, description }) => {
  const bodyEl = document.body;
  const heroEl = document.createElement("section");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");

  heroEl.className = "hero";

  imgEl.className = "hero_img";
  imgEl.setAttribute("src", img);
  imgEl.setAttribute("alt", title);

  textEl.className = "hero_text";
  titleEl.className = "hero_title";
  titleEl.textContent = title;

  descriptionEl.className = "hero_description";
  descriptionEl.textContent = description;

  textEl.append(titleEl, descriptionEl);
  heroEl.append(imgEl, textEl);
  bodyEl.appendChild(heroEl);
};

// Crea la singola hero

createHero({
  img: "https://picsum.photos/600/400",
  title: "Dynamic Hero",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis distinctio, dicta vel dolor quaerat quia accusantium atque nostrum nesciunt at magnam minima repellat blanditiis pariatur perspiciatis. Mollitia, excepturi minima?",
});

/*## Avanzato

Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga 
anche una sezione relativa a dei prodotti (simile a quanto visto a lezione), 
attenzione a creare un contenitore che inglobi tutti i singoli prodotti (qualcosa simile a productListEl). */

import { products } from "./mocks.js";

const createCard = (title, img, description) => {
  const bodyEl = document.body;
  const cardContainerEl = document.querySelector(".card_container");
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";

  imgEl.className = "card__img";
  imgEl.setAttribute("src", img);
  imgEl.setAttribute("alt", title);

  titleEl.className = "card__title";
  titleEl.textContent = title;

  descriptionEl.className = "card__description";
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);
  cardContainerEl.appendChild(cardEl);
  bodyEl.appendChild(cardContainerEl);
};

for (let product of products) {
  createCard(product.title, product.img, product.description);
}
