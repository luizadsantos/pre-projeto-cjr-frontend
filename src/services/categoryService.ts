import { Category } from "@/models/category";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export class CategoryService {
  async getCategories() {
    const response = (await axiosInstance.get("/category")) as {
      data: { data: Category[] };
      status: number;
    };

    if (response.status !== 200)
      throw new Error(
        "Failed to fetch categories. Status: " + response.status.toString(),
      );

    return response.data.data;
  }
}
