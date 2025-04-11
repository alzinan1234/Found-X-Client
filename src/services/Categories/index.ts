import AxiosInstance from "@/src/lib/AxiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await AxiosInstance.get("/categories");
    return data;
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
