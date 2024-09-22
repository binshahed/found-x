import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { loginUser, registerUser } from "../services/authService";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData as any),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData as any),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      console.log("t error", error);
      toast.error(error.message);
    }
  });
};
