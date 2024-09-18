import axios from "axios";

export const HitAPI = axios.create({
  baseURL: "http://localhost:3000",
});
