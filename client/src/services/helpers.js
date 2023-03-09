import axios from "axios";

const API = "http://localhost:3000";

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