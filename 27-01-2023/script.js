import { GET } from "./api.js";
import { qS, cE, tvCardGen } from "./utils.js";

const popularEl = qS(".popular");
const airingTodayEl = qS(".airing_today");
const wrapperEl = cE("div");
const wrapperImgEl = cE("img");
const hero = qS("hero");

const images = [
  "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  "https://image.tmdb.org/t/p/w500/3FLHePl9Y3n4BidLVjIA9qSRDOE.jpg",
  "https://image.tmdb.org/t/p/w500/myCEG6C5Nk181jXzBek5MQEXpM2.jpg",
];
let imgCounter = 0;

wrapperEl.className = "wrapper";
wrapperImgEl.setAttribute("src", images[0]);
wrapperImgEl.setAttribute("alt", `image 0`);

setInterval(() => {
  wrapperImgEl.src = images[imgCounter];
  wrapperImgEl.alt = `image ${imgCounter}`;
  imgCounter++;

  if (imgCounter >= images.length) {
    imgCounter = 0;
  }
}, 4000);

wrapperEl.appendChild(wrapperImgEl);
hero.appendChild(wrapperEl);

GET("tv", "airing_today").then((data) =>
  data.results.map((tv) => airingTodayEl.append(tvCardGen(tv)))
);

GET("tv", "popular").then((data) =>
  data.results.map((tv) => popularEl.append(tvCardGen(tv)))
);
