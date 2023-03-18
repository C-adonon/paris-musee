import axios from "axios";

// let API = VUE_APP_API_URL;
let API = eval(process.env.VUE_APP_API_URL);

console.log("API", API);
console.log("response", `${API}/painters/random`);

// Gets 4 random painters
export async function getRandomPainters() {
  const response = await axios.get(`${API}/painters/random`);
  return response.data;
}

// Gets a random painting from a specified painter
export async function getRandomPaintingByPainterId(id) {
  const response = await axios.get(`${API}/painters/${id}/random`);
  return response.data;
}

// Gets all paintings
export async function getAllPaintings() {
  const response = await axios.get(`${API}/paintings`);
  return response.data;
}
