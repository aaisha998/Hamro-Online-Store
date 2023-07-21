import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export const GetAllCategories = () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => res.data);
};

export const useAllCategories = () => {
  toast.success("Failed to Fetch Category");
  return useQuery<String[]>(
    "https://fakestoreapi.com/products/categories",
    () => GetAllCategories(),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch Category");
      },
    }
  );
};
