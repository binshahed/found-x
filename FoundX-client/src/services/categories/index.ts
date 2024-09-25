"use server";
import { axiosInstance } from "@/src/lib/axiosInstance";

export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");
    return data?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
