import axios from "axios";

const API = "http://localhost:3000";

export async function getRandomPainters() {
  const response = await axios.get(`${API}/painters/random`);
  return response.data;
}

export async function getPaintingById(id) {
  const response = await axios.get(`${API}/paintings/${id}`);
  return response.data;
}
