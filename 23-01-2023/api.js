const BASE_URL = "https://dummyjson.com/";

const randomID = (max) => {
  return Math.floor(Math.random() * max);
};

const GET = async (endpoint, quoteId) => {
  const res = await fetch(BASE_URL + endpoint + `/${quoteId}`);
  const data = await res.json();
  return data;
};

const GET2 = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint + `/${randomID(99) + 1}`);
  const data = await res.json();
  return data;
};

export { GET, GET2, randomID };
