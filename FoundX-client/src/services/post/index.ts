"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (fromData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/items", fromData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
