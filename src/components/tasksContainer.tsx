import { Task } from "@/models/task";
import TaskDiv from "./task";
import { Category } from "@/models/category";
import { Dispatch, SetStateAction } from "react";

export default function TasksContainer({
  theme,
  tasks,
  categories,
  setTasks,
  filter,
}: {
  theme: "light" | "dark";
  tasks: Task[];
  categories: Category[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  filter: "all" | "pending" | "done";
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, index) => (
        <TaskDiv
          theme={theme}
          filter={filter}
          task={task}
          categories={categories}
          setTasks={setTasks}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}
