import { CreateTask, Task, UpdateTask } from "@/models/task";
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
        : "Failed to fetch tasks",
    );
}

interface ResponseTask {
  data: { data: Task };
  message?: string;
  error?: string;
  status: number;
}

interface ResponseTasks {
  data: { data: Task[] };
  message?: string;
  error?: string;
  status: number;
}

export class TaskService {
  async getTasks() {
    const response = (await axiosInstance.get("/task")) as ResponseTasks;

    throwError(response);

    return response.data.data;
  }

  async getTaskById(id: number) {
    const response = (await axiosInstance.get(
      "/task/" + id.toString(),
    )) as ResponseTask;

    throwError(response);

    return response.data.data;
  }

  async createTask(task: CreateTask) {
    const response = (await axiosInstance.post("/task", task)) as ResponseTask;

    throwError(response);

    return response.data.data;
  }

  async updateTask(task: UpdateTask) {
    const response = (await axiosInstance.patch(
      "/task/" + task.id.toString(),
      task,
    )) as ResponseTask;

    throwError(response);

    return response.data.data;
  }

  async deleteTask(id: number) {
    const response = (await axiosInstance.delete(
      "/task/" + id.toString(),
    )) as ResponseTask;

    throwError(response);

    return response.data.data;
  }

  async deleteDoneTasks() {
    const response = (await axiosInstance.delete("/task")) as ResponseTasks;

    throwError(response);

    return response.data.data;
  }

  async getNotDoneTasks() {
    const response = (await axiosInstance.get("/task/active")) as ResponseTasks;

    throwError(response);

    return response.data.data;
  }

  async getDoneTasks() {
    const response = (await axiosInstance.get(
      "/task/nonactive",
    )) as ResponseTasks;

    throwError(response);

    return response.data.data;
  }

  async getTaskByCategory(categoryId: number) {
    const response = (await axiosInstance.get(
      "/task/category/" + categoryId.toString(),
    )) as ResponseTask;

    throwError(response);

    return response.data.data;
  }
}
