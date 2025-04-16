import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/users",
});

// Automatically add token to headers (if stored)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
