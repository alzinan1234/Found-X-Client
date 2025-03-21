import { useMutation } from "@tanstack/react-query";
import registerUser from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

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
