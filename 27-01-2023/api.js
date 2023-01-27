const API_KEY = "472c17459349532471f96489e3468cd9";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "tv", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };
