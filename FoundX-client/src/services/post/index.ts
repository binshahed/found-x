import { service } from "@/src/lib/axiosInstance";

export const createPost = async (fromData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${service}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: fromData
    });
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
