/*## Esercitazione

Seguendo quello fatto oggi a lezione effettuate una chiamate `fetch()` alla seguente API web: `https://api.escuelajs.co/api/v1/products` 
e stampate in console nome e descrizione del prodotto simile a questo formato 
```
--------------
Tasty Rubber Soap
The Football Is Good For Training And Recreational Purposes
--------------
Modern Bronze Chair
New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

```

State molto attendi all'asincronicità della `PROMISE`*/

// stampo l'array di oggetti

/* let dataDaFetch;

 fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    dataDaFetch = data;
    console.log(dataDaFetch);
  });

// stampo solo determinati valori dell'array di oggetti

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => dataManipulation(data));

const dataManipulation = (data) => {
  data.forEach((element) => {
    console.log("-----------------");
    console.log(element.title);
    console.log(element.description);
  });
};

*/

// ## Avanzato

//Crea delle card il più verosimili possibile ad un vero e-commerce e provate ad utilizzare un loader (puo anche essere un semplice messaggio) e la gestione degli errori*/

const productsElement = document.querySelector(".products__list");
const dwnDataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");

dwnDataBtn.addEventListener("click", () => {
  loaderElement.classList.add("loading");
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataManipulation(data);
    })
    .catch((error) => {
      loaderElement.classList.remove("loading");
      alert("C'è stato un errore");
      console.log("MIO ERRORE: ", error);
    });
});

const dataManipulation = (data) => {
  loaderElement.classList.remove("loading");
  dwnDataBtn.style.display = "none";

  data.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const titleEl = document.createElement("h3");
    titleEl.className = "card__title";
    titleEl.textContent = item.title;

    const imgEl = document.createElement("img");
    imgEl.className = "card__img";
    imgEl.setAttribute("src", item.images[0]);
    imgEl.setAttribute("alt", "image");

    const descriptionEl = document.createElement("p");
    descriptionEl.className = "card__description";
    descriptionEl.textContent = item.description;

    cardEl.appendChild(titleEl);
    cardEl.appendChild(imgEl);
    cardEl.appendChild(descriptionEl);

    productsElement.appendChild(cardEl);
  });
};
