import { Task } from "@/models/task";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export class TaskService {
  async getTasks() {
    const response = (await axiosInstance.get("/task")) as {
      data: { data: Task[] };
      status: number;
    };

    if (response.status !== 200)
      throw new Error(
        "Failed to fetch tasks. Status: " + response.status.toString(),
      );

    return response.data.data;
  }
}
