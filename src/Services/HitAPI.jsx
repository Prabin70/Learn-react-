import axios from "axios";
import { baseUrl } from "../config/config";

export const HitAPI = axios.create({
  baseURL: baseUrl,
});
