import { Dispatch, SetStateAction, useState } from "react";
import CreateTaskModal from "./createTaskModal";
import { Task } from "@/models/task";
import { Category } from "@/models/category";

export default function Header({
  setTasks,
  filter,
  categories,
}: {
  setTasks: Dispatch<SetStateAction<Task[]>>;
  filter: "all" | "pending" | "done";
  categories: Category[];
}) {
  const [show, setShow] = useState(false);

  // Hide/Show the scrollbar dialog
  document.body.style.overflow = show ? "hidden" : "auto";
  return (
    <header className="flex items-center justify-between p-8 py-6 font-bold bg-primary">
      <h1 className="text-3xl text-neutral">To-Do list</h1>

      {show && (
        <CreateTaskModal
          categories={categories}
          setTasks={setTasks}
          filter={filter}
          setShow={setShow}
        />
      )}
      <button
        onClick={() => {
          setShow(true);
        }}
        className="btn p-2"
      >
        Create task
      </button>
    </header>
  );
}
