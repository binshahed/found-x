import envConfig from "@/src/config/envConfig";
import { service } from "@/src/lib/axiosInstance";

export const getAllCategories = async () => {
  try {
    const { data } = await service.get("/item-categories");
    return data?.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
