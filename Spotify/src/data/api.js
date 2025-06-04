import axios from "axios";

const api = axios.create({
  baseURL: "https://api.discogs.com/releases/249504", 
});

export default api;
