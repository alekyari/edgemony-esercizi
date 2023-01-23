const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

export { cE, qS, quoteCard, quoteCard2 };

const quoteCard = (data) => {
  const cardEl = cE("div");
  const imageEl = cE("img");
  const quoteEl = cE("p");
  const authorEl = cE("span");

  cardEl.className = "card";

  imageEl.setAttribute(
    "src",
    "https://cdn.artphotolimited.com/images/60913d60bd40b85323893a87/1000x1000/michael-jordan-in-action.jpg"
  );
  imageEl.setAttribute("alt", "quote");
  imageEl.className = "image";

  quoteEl.className = "quote";
  quoteEl.textContent = `'${data.quote}'`;

  authorEl.className = "author";
  authorEl.textContent = data.author;

  cardEl.append(imageEl, quoteEl, authorEl);
  return cardEl;
};

const quoteCard2 = (data, parameter) => {
  const cardEl = cE("div");
  const imageEl = cE("img");
  const quoteEl = cE("p");
  const authorEl = cE("span");

  cardEl.className = "card";

  imageEl.setAttribute("src", `https://picsum.photos/800/500?+${parameter}`);
  imageEl.setAttribute("alt", "quote");
  imageEl.className = "image";

  quoteEl.className = "quote";
  quoteEl.textContent = `'${data.quote}'`;

  authorEl.className = "author";
  authorEl.textContent = data.author;

  cardEl.append(imageEl, quoteEl, authorEl);
  return cardEl;
};
