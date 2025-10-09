import axios from "axios";

const authApi = axios.create({
  baseURL: "https://httpbin.org",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const weatherApi = axios.create({
  baseURL: "",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export { authApi, weatherApi }