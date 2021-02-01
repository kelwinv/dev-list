import axios from "axios";

export const GithubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const api = axios.create({
  baseURL: process.env.SERVER || "https://listadev.herokuapp.com/",
});
