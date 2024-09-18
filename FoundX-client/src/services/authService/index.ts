"use server";

import envConfig from "@/src/config/envConfig";
import { service } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";

export const registerUser = async (userData: TUserData) => {
  try {
    const { data } = await service.post("/auth/register", userData);

    console.log(data);
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
