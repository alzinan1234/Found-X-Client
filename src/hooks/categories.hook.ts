import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Categories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategories(),
  });
};
