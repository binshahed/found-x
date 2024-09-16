export const delay = async (d = 2000) => {
  return await new Promise((resolve) => setTimeout(resolve, d));
};
