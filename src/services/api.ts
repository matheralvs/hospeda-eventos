import axios from "axios";

const apiURL = process.env.API_URL || "http://localhost:3333";

export const api = axios.create({
  baseURL: apiURL,
});
