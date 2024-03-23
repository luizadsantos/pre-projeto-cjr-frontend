import Header from "@/components/header";
import Pending from "@/components/pending";
import Filter from "@/components/filter";
import DeleteDone from "@/components/deleteDone";
import TasksContainer from "@/components/tasksContainer";
import { Task } from "@/models/task";
import { Category } from "@/models/category";
import { CategoryService } from "@/services/categoryService";
import { TaskService } from "@/services/taskService";

export default async function Home() {
  const categoryServices = new CategoryService();
  const taskServices = new TaskService();

  let categories: Category[] = [];
  let tasks: Task[] = [];

  try {
    categories = await categoryServices.getCategories();
    tasks = await taskServices.getTasks();
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col px-16 pb-4">
        <div className="flex justify-between items-center py-3">
          <Pending tasks={tasks} />

          <Filter />

          <DeleteDone />
        </div>

        <TasksContainer tasks={tasks} categories={categories} />
      </main>
    </>
  );
}
