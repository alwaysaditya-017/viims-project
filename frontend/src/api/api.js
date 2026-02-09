import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:18081",
});

export default api;