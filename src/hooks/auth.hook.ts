import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { registerUser } from "../services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: [" USER REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User Registered Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: [" USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User Login Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
