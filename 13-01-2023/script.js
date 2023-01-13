//### Esercizio 1

//Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione.
//Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

// ho svolto il primo esercizio in modo statico su html e dopo ho commentato per rifarlo in dinamico su js

const images = [
  "https://picsum.photos/300/500?1",
  "https://picsum.photos/300/500?2",
  "https://picsum.photos/300/500?3",
];
/*
let sliderImgEl = document.querySelector(".slider__img");
const btn1El = document.querySelector(".button1");
const btn2El = document.querySelector(".button2");
const btn3El = document.querySelector(".button3");
const selEl = document.querySelector(".selected");

let event1 = btn1El.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[0]);
  // event2 || event3 ? null : btn1El.classList.toggle("selected");
  btn1El.classList.add("selected");
  btn2El.classList.remove("selected");
  btn3El.classList.remove("selected");
});

let event2 = btn2El.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[1]);
  btn2El.classList.add("selected");
  btn1El.classList.remove("selected");
  btn3El.classList.remove("selected");
});

let event3 = btn3El.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[2]);
  btn3El.classList.add("selected");
  btn2El.classList.remove("selected");
  btn1El.classList.remove("selected");
});

/*
leftBtnEl.addEventListener("click", () => {
  carouselImgEl.setAttribute("src", images[carouselState]);
  carouselState--;

  if (carouselState < 0) {
    carouselState = 4;
  }
});
*/

//### Avanzato

//Creare il template dello slider cui sopra completamente dinamico (via Javascript).

const createSlider = () => {
  const bodyEl = document.body;
  const containerEl = document.createElement("div");
  const sliderEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const btnContEl = document.createElement("div");
  const button1El = document.createElement("button");
  const button2El = document.createElement("button");
  const button3El = document.createElement("button");

  containerEl.classList.add("container");
  sliderEl.classList.add("slider");
  button1El.classList.add("button1");
  button2El.classList.add("button2");
  button3El.classList.add("button3");
  btnContEl.classList.add("button__container");

  imgEl.classList.add("slider__img");
  imgEl.setAttribute("src", images[1]);
  imgEl.setAttribute("alt", images[1]);

  button1El.addEventListener("click", () => {
    imgEl.setAttribute("src", images[0]);
    button1El.classList.add("selected");
    button2El.classList.remove("selected");
    button3El.classList.remove("selected");
  });

  button2El.addEventListener("click", () => {
    imgEl.setAttribute("src", images[1]);
    button2El.classList.add("selected");
    button1El.classList.remove("selected");
    button3El.classList.remove("selected");
  });

  button3El.addEventListener("click", () => {
    imgEl.setAttribute("src", images[2]);
    button3El.classList.add("selected");
    button2El.classList.remove("selected");
    button1El.classList.remove("selected");
  });

  btnContEl.append(button1El, button2El, button3El);
  sliderEl.append(imgEl, btnContEl);
  containerEl.appendChild(sliderEl);
  bodyEl.appendChild(containerEl);
};

createSlider();
