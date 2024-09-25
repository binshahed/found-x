"use server";

import envConfig from "@/src/config/envConfig";

export const getRecentPost = async () => {
  const fetchOptions = {
    next: {
      tags: ["posts"]
    }
  };

  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
    fetchOptions
  );

  return res.json();
};
export const getAllPost = async () => {
  const fetchOptions = {
    next: {
      tags: ["posts"]
    }
  };

  const res = await fetch(`${envConfig.baseApi}/items`, fetchOptions);

  return res.json();
};
export const getPostById = async (id: string) => {
  const fetchOptions = {
    next: {
      tags: ["posts"]
    }
  };

  const res = await fetch(`${envConfig.baseApi}/items/${id}`, fetchOptions);

  return res.json();
};
