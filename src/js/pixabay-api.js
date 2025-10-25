import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52937189-e7de87ebecf7d1a373ae68931";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
