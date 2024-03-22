import Header from "@/components/header";
import Pending from "@/components/pending";
import Filter from "@/components/filter";
import DeleteDone from "@/components/deleteDone";
import TasksContainer from "@/components/tasksContainer";
import { Task } from "@/models/task";
import { Category } from "@/models/category";

const tasks: Task[] = [
  {
    id: "1",
    name: "task 1",
    isActive: true,
    categoryId: "1",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    name: "task 2",
    isActive: false,
    categoryId: "1",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    name: "task 3",
    isActive: true,
    categoryId: "2",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "4",
    name: "task 4",
    isActive: true,
    categoryId: "-1",
    createdAt: "",
    updatedAt: "",
  },
];

const categories: Category[] = [
  {
    id: "1",
    name: "category 1",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    name: "category 2",
    createdAt: "",
    updatedAt: "",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16">
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
