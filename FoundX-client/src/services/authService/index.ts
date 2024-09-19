"use server";

import envConfig from "@/src/config/envConfig";
import { service } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";

export const registerUser = async (userData: TUserData) => {
  try {
    const { data } = await service.post("/auth/register", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const loginUser = async (userData: TUserData) => {
  try {
    const { data } = await service.post("/auth/login", userData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    console.log("error", error?.response);

    throw new Error(error);
  }
};

export const getUser = async (userData: TUserData) => {
  const accessToken = cookies().get("accessToken")?.name;
  let getDecodedToken = null;
  if (accessToken) {
    try {
      // getDecodedToken = jwt.verify(accessToken, envConfig.jwtSecret);
    } catch (error) {
      console.log("Invalid token", error);
      throw new Error("Invalid token");
    }
  }
};
