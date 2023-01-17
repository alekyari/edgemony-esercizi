/*## Esercitazione

Utilizzando sempre le seguenti Rest API: `https://api.escuelajs.co/api/v1/products` lavoriamo sempre al nostro e-commerce.

- Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
- Dovremo crere anche un `addEventListner` al pusante di aggiunta al carrello, in modo da aggiungere l'elemento al vostro carrello 
`const cart = []` facendo apparire un `alert()` che indichi l'avvenuta aggiunta al carrello dell'elemento.

NB: è gradita sempre la gestione degli errori per il metodo `fetch()` ed un loader



## Avanzato

Fare in modo che gli elementi dentro l'array `const cart = []` vengano visualizzati nel DOM creando i rispettivi elementi 
e prevedere un pulsante che rimuova l'elemento selezionato dal carrello */

//-------------MI SCUSO MA AVENDO AVUTO POCO TEMPO PER VIA DI UN IMPEGNO HO LAVORATO DIRETTAMENTE SUL PROGETTO SVOLTO OGGI------------------

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const cartObj = document.createElement("div");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      cardCreator(element);
    })
  )
  .catch((error) => {
    alert("C'è stato un errore");
    console.log("l'errore è", error);
  });

const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  //ho usato il metodo slice con intervallo 0(start-incluso) e 10(end-escluso)
  h1El.textContent = item.title.slice(0, 10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;

  const descEl = document.createElement("p");
  descEl.className = "description";
  //ho usato il metodo substr con  0(start-inizio) e 30(length-numero dei caratteri da estrarre)
  descEl.textContent = item.description.substr(0, 30);

  const Btn = document.createElement("button");
  Btn.textContent = "Aggiungi al Carrello";

  Btn.addEventListener("click", () => {
    const loaderElement = document.createElement("div");
    loaderElement.className = "loading";
    productsList.appendChild(loaderElement);

    cart.push(item);
    cartCreation();
    console.log(cart);
    alert(
      `l'articolo ${item.title.slice(
        0,
        10
      )} è stato aggiunto con successo al carrello!`
    );
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, Btn);
  productsList.appendChild(cardEl);
};

const cartCreation = () => {
  tendina.innerHTML = "";
  cart.forEach((item) => {
    const cartObj = document.createElement("div");
    const cartEl = document.createElement("div");
    cartEl.innerHTML = `<p class="tendina__cart">Articolo: ${item.title.slice(
      0,
      10
    )}</p><p>Prezzo: ${item.price}$</p>`;

    const removeEl = document.createElement("div");
    removeEl.textContent = "Rimuovi dalla lista";
    removeEl.className = "remove__el";

    const removecontEl = document.createElement("div");
    removecontEl.className = "remove__container";

    const hrEl = document.createElement("hr");

    const removebtnEl = document.createElement("button");
    removebtnEl.textContent = "x";
    removebtnEl.className = "remove__btn";

    removecontEl.append(removeEl, removebtnEl);
    cartObj.append(cartEl, removecontEl, hrEl);
    tendina.append(cartObj);

    removebtnEl.addEventListener("click", () => {
      cartObj.remove();
    });
  });
};

// non sono riuscito a gestire il tempo di intervento del loader, ho inserito un adeventlistener che rimuve gli ogetti dalla lista
// ma ogni volta che ne seleziono uno nuovo ricompaiono gli elementi eliminati in precedenza.
