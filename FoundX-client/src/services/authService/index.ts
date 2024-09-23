"use server";

import { service } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

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
    throw new Error(error?.data);
  }
};

export const getUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let getDecodedToken = null;

  if (accessToken) {
    try {
      getDecodedToken = await jwtDecode(accessToken);
      return getDecodedToken;
    } catch (error) {
      console.log("Invalid token", error);
      throw new Error("Invalid token");
    }
  }
};

export const logout = () => {
  try {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
    window.location.reload();
  } catch (error) {
    throw new Error("Failed to log out.");
  }
};
