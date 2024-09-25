import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createClimeRequest } from "../services/clameRequest";

export const useCreateClimeRequest = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createClimeRequest(postData),
    onSuccess: () => {
      toast.success("Clime Request successfully.");
    },
    onError: (error) => {
      toast.error(error?.message);
      console.log(error);
    }
  });
};
