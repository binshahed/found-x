import envConfig from "@/src/config/envConfig";
import axios from "axios";

export const service = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_VASE_API}`
});
