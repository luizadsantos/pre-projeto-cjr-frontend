import { Category } from "@/models/category";
import { Task } from "@/models/task";
import { CategoryService } from "@/services/categoryService";
import { TaskService } from "@/services/taskService";
import { Dispatch, SetStateAction } from "react";
import showError from "./errorHandling";

export default async function fetchData({
  filter,
  setTasks,
  setCategories,
}: {
  filter?: "all" | "done" | "pending";
  setTasks?: Dispatch<SetStateAction<Task[]>>;
  setCategories?: Dispatch<SetStateAction<Category[]>>;
}) {
  const taskServices = new TaskService();
  const categoryServices = new CategoryService();
  try {
    if (setTasks)
      if (!filter || filter == "all") {
        setTasks([]);
        setTasks(await taskServices.getTasks());
      } else {
        setTasks([]);
        setTasks(
          await (filter == "done"
            ? taskServices.getDoneTasks()
            : taskServices.getNotDoneTasks()),
        );
      }
    if (setCategories) setCategories(await categoryServices.getCategories());
  } catch (error) {
    showError(error);
  }
}
