import { Task } from "@/models/task";
import TaskDiv from "./task";
import { Category } from "@/models/category";
import { Dispatch, SetStateAction } from "react";

export default function TasksContainer({
  tasks,
  categories,
  setTasks,
}: {
  tasks: Task[];
  categories: Category[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, index) => (
        <TaskDiv
          task={task}
          categories={categories}
          setTasks={setTasks}
          key={index}
        />
      ))}
    </div>
  );
}
