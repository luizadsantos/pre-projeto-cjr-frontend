import { Category, CreateCategory, UpdateCategory } from "@/models/category";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

function throwError(response: {
  status: number;
  error?: string;
  message?: string;
}) {
  if (response.status !== 200)
    throw new Error(
      response.error && response.message
        ? response.status + ": " + response.error + "\n" + response.message
        : "Failed to fetch categories",
    );
}

interface Response {
  data: { data: Category };
  message?: string;
  error?: string;
  status: number;
}

export class CategoryService {
  async getCategories() {
    const response = (await axiosInstance.get("/category")) as {
      data: { data: Category[] };
      message?: string;
      error?: string;
      status: number;
    };

    throwError(response);

    return response.data.data;
  }

  async getCategoryById(id: number) {
    const response = (await axiosInstance.get(
      "/category/" + id.toString(),
    )) as Response;

    throwError(response);

    return response.data.data;
  }

  async createCategory(category: CreateCategory) {
    const response = (await axiosInstance.post(
      "/category",
      category,
    )) as Response;

    throwError(response);

    return response.data.data;
  }

  async updateCategory(category: UpdateCategory) {
    const response = (await axiosInstance.patch(
      "/category/" + category.id.toString(),
      category,
    )) as Response;

    throwError(response);

    return response.data.data;
  }

  async deleteCategory(id: number) {
    const response = (await axiosInstance.delete(
      "/category/" + id.toString(),
    )) as Response;

    throwError(response);

    return response.data.data;
  }
}
