/*### Esercizio 1

Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata 
di tipo GET all'endpoint `https://dummyjson.com/users`, renderizzare la lista di utenti, creando
delle cards con i valori a vostra scelta (es. nome, cognome, ecc...)*/

import { cE, qS, userGenerator } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");

// ho generato il primo user element con il metodo fetch classico per verificare eventuali errori e per stilizzarlo

/*fetch("https://dummyjson.com/users/1")
  .then((res) => res.json())
  .then((users) => bodyEl.appendChild(userGenerator(users)));*/

//generazione degli user element
GET("users").then((data) =>
  data.users.map((user) => {
    bodyEl.appendChild(userGenerator(user));
  })
);

/*### Avanzato

Sulla base dell'esercizio 1, creare un filtro tramite `input` 
che vada a filtrare la lista degli utenti per nome e/o cognome*/

// funzione che rimuove tutti i singoli user element
const onUsersDelete = () => {
  const usersEls = document.querySelectorAll(".user");
  usersEls.forEach((user) => user.remove());
};

const inputContainer = cE("div");
//First Name filter creation
inputContainer.className = "input_Container";
const labelFirstName = cE("label");
labelFirstName.setAttribute = ("name", "First Name");
labelFirstName.textContent = "Filter by First Name:";
const firstNameFilterEl = cE("input");
firstNameFilterEl.setAttribute = ("name", "First Name");

//Last Name filter Creation
const labelLastName = cE("label");
labelLastName.setAttribute = ("name", "First Name");
labelLastName.textContent = "Filter by Last Name:";
const lastNameFilterEl = cE("input");
lastNameFilterEl.setAttribute = ("name", "First Name");
let searchedValue = "";
inputContainer.append(
  labelFirstName,
  firstNameFilterEl,
  labelLastName,
  lastNameFilterEl
);
bodyEl.appendChild(inputContainer);

// First Name filter
firstNameFilterEl.addEventListener("input", (e) => {
  onUsersDelete();
  searchedValue = e.target.value;

  GET("users").then((data) =>
    data.users.map((user) => {
      if (user.firstName.includes(searchedValue))
        bodyEl.appendChild(userGenerator(user));
    })
  );
});
//Last Name Filter
lastNameFilterEl.addEventListener("input", (e) => {
  onUsersDelete();
  searchedValue = e.target.value;

  GET("users").then((data) =>
    data.users.map((user) => {
      if (user.lastName.includes(searchedValue))
        bodyEl.appendChild(userGenerator(user));
    })
  );
});
