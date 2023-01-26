import { cE, qS, productCard, priceBarGen } from "./utils.js";
import myJson from "./mock.json" assert { type: "json" };

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
const barContainerEl = cE("div");
barContainerEl.className = "bar_container";

console.log(myJson);

myJson.map((product) => wrapperEl.appendChild(productCard(product)));

const priceValue = myJson.map((product) => product.price);

console.log(priceValue);

let priceCount = [];

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

priceCount.map((range) =>
  barContainerEl.appendChild(priceBarGen(range.text, range.price.length))
);

const titleEl = cE("h2");
titleEl.textContent = "Product Price Stats";
barContainerEl.append(titleEl);

bodyEl.append(barContainerEl, wrapperEl);

console.log(priceCount);

/*### Esercizio 1

Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo `n` secondi:

- mostra il timer in schermo, come visto a lezione;
- che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
- la presenza di un pulsante `STOP` interrompe il flusso temporale, tramite il relativo `clearInterval`.*/

const miscContainerEl = document.createElement("div");
miscContainerEl.className = "misc__container";
const timerContainerEl = document.createElement("div");
const btnTimerContainerEl = document.createElement("div");
btnTimerContainerEl.className = "button__timer__container";
timerContainerEl.className = "timer__container";
const timingEl = document.createElement("h1");
timingEl.className = "timing";
const stopBtnEl = document.createElement("button");
const startBtnEl = document.createElement("button");
stopBtnEl.textContent = "stop";
startBtnEl.textContent = "start";
btnTimerContainerEl.append(startBtnEl, stopBtnEl);
timerContainerEl.append(timingEl, btnTimerContainerEl);
miscContainerEl.append(timerContainerEl, barContainerEl);
bodyEl.append(miscContainerEl, wrapperEl);

// const intervalId = setInterval(() => {
//   timingEl.textContent = `${new Date().getMinutes()}m - ${new Date().getSeconds()}s`;
// }, 1000);

// const intervalId = setInterval(() => {
//   titleEl.textContent = `${new Date().getSeconds()}s`;
//   if (new Date().getSeconds() === 59) titleEl.textContent = "FINE!";
// }, 1000);

let timeout = 10;

//startBtnEl.addEventListener("click", () =>

const firstCount = setTimeout(() => {
  const countDown = setInterval(() => {
    if (timeout === 0) {
      timerContainerEl.style.backgroundColor = `#f3842f`;
      timingEl.style.display = "none";
      btnTimerContainerEl.style.display = "none";
    } else {
      timeout--;
      timingEl.textContent = timeout;
      stopBtnEl.addEventListener("click", () => {
        clearInterval(countDown);
        timerContainerEl.style.backgroundColor = "bisque";
      });
    }
  }, 1000);
}, 3000);

startBtnEl.addEventListener("click", () => {
  clearInterval(firstCount);
  timerContainerEl.style.backgroundColor = "bisque";
  let timeout = 10;
  const countDown = setInterval(() => {
    if (timeout === 0) {
      timerContainerEl.style.backgroundColor = `#f3842f`;
      btnTimerContainerEl.style.display = "none";
      timingEl.style.display = "none";
    } else {
      timeout--;
      timerContainerEl.style.display = "flex";
      timingEl.textContent = timeout;
      stopBtnEl.addEventListener("click", () => {
        clearInterval(countDown);
        timerContainerEl.style.backgroundColor = "bisque";
      });
    }
  }, 1000);
});

alert("The Countdown will start in 3 sec");
