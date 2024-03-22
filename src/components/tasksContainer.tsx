import { Task } from "@/models/task";
import TaskDiv from "./task";
import { Category } from "@/models/category";

export default function TasksContainer({
  tasks,
  categories,
}: {
  tasks: Task[];
  categories: Category[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, index) => (
        <TaskDiv task={task} categories={categories} key={index} />
      ))}
    </div>
  );
}
