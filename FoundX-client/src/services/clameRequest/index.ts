"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";
import { revalidateTag } from "next/cache";

export const createClimeRequest = async (fromData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/claim-request", fromData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    revalidateTag("claimRequest");

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
