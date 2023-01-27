const qS = (type) => document.querySelector(type);
const cE = (element) => document.createElement(element);

export { qS, cE, tvCardGen };

const tvCardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const titleEl = cE("h5");
  titleEl.className = "tv-title";
  const voteEl = cE("div");
  voteEl.className = "vote";

  voteEl.textContent = `${data.vote_average}%`;
  titleEl.textContent = data.name;
  cardEl.setAttribute("id", data.id);
  cardEl.className = "tv";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.append(imgEl, titleEl, voteEl);

  return cardEl;
};
