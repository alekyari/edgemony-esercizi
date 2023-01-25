export { cE, qS, productCard, priceBarGen };

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const productCard = (data) => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const textWrapperEl = cE("div");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const discountEl = cE("p");
  const priceEl = cE("span");
  const stockEl = cE("span");

  wrapperEl.className = "product-card";
  imageEl.setAttribute("src", data.thumbnail);
  imageEl.setAttribute("alt", data.title);
  textWrapperEl.className = "product-card__text";
  titleEl.textContent = data.title;
  discountEl.textContent = `Discount: ${data.discountPercentage}%`;
  descriptionEl.textContent = data.description;
  priceEl.textContent = `Price: ${data.price}$`;
  stockEl.textContent = `Stock: ${data.stock} left`;

  textWrapperEl.append(titleEl, descriptionEl, priceEl, discountEl, stockEl);
  wrapperEl.append(imageEl, textWrapperEl);
  return wrapperEl;
};

const priceBarGen = (range, price) => {
  const bar = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");
  const numProdEl = cE("h3");

  bar.className = "bar";
  textEl.textContent = range;
  numProdEl.textContent = `${price} Products`;
  statusEl.className = "bar__status";
  statusEl.style.height = `${price * 10}px`;

  setInterval(() => {
    statusEl.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);

  bar.append(textEl, numProdEl, statusEl);
  return bar;
};
