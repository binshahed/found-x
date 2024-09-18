import envConfig from "@/src/config/envConfig";
import axios from "axios";

export const service = axios.create({
  baseURL: `${envConfig.baseApi}`
});
