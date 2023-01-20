const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");
const selectCategory = document.querySelector("#homecategory");
const chosenCategory = document.querySelector("#choosecat");
const pallino = document.querySelector(".pallino");
//const promptInput = prompt(`insert the category number here`);
const loaderElement = document.querySelector(".loader");

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

/*selectCategory.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target[0].value);
  alert(`sta funzionando`);
});*/

const metodoGet = () => {
  fetch("https://api.escuelajs.co/api/v1/products/")
    .then((res) => res.json())
    .then((data) => {
      //filtro------------------------

      const newData = data.filter(
        (item) => item.category.id === parseInt(chosenCategory.value)
      );
      newData.forEach((element) => {
        cardCreator(element);
        console.log(element);
        loaderElement.classList.remove("loading");
      });
    })
    .catch((error) => {
      alert("C'è stato un errore");
      console.log("l'errore è", error);
    });
};

selectCategory.addEventListener("submit", (event) => {
  loaderElement.classList.add("loading");
  event.preventDefault();
  productsList.innerHTML = "";
  alert(`These are the filtered category objects!`);
  metodoGet();
});

//----------Card Creator-------
const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images);
  imgEl.setAttribute("alt", "#");
  imgEl.className = "card__img";

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.slice(0, 18);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = `${item.price} $`;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description.substr(0, 40);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cartPopulator(item);
    alert(
      `l'articolo ${item.title.slice(
        0,
        10
      )} è stato aggiunto con successo al carrello!`
    );
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};
//----------Card Creator-------

//-------Cart Creator-------

//-------Cart Creation-------
const cartCreation = () => {
  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal = cartTotal + item.qty;
  });
  pallino.textContent = cartTotal;

  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cart__row";
    cartEl.innerHTML = `<p class="quantity__cart"> x ${item.qty}</p><p class="title__cart">${item.title}</p><p class="price__cart">${item.price}$</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    const cartObj = document.createElement("div");
    deleteBtn.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });
    cartEl.append(deleteBtn);
    tendina.appendChild(cartEl);
  });
};
//-------Cart Creation-------

//-------Cart Populator-------
const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };
  //-------Cart Populator------

  //-------Search-------
  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};
//-------Search-------

export const addSelectCategories = (arrayCat) => {
  arrayCat.forEach((item) => {
    const optionValue = document.createElement("option");
    optionValue.textContent = item.name;
    optionValue.setAttribute("value", item.id);
    chosenCategory.appendChild(optionValue);
  });
};

const funzioneGetCat = () => {
  fetch("https://api.escuelajs.co/api/v1/categories/")
    .then((res) => res.json())
    .then((data) => addSelectCategories(data))
    .catch((e) => console.log("Questo è il mio errore: ", e));
};

funzioneGetCat();
