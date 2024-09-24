import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categories";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => await getAllCategories()
  });
};
