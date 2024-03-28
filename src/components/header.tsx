import { Dispatch, SetStateAction, useState } from "react";
import CreateTaskModal from "./createTaskModal";
import { Task } from "@/models/task";
import { Category } from "@/models/category";
import ChangeTheme from "./changeTheme";

export default function Header({
  theme,
  setTheme,
  setTasks,
  filter,
  categories,
}: {
  theme: "light" | "dark";
  setTasks: Dispatch<SetStateAction<Task[]>>;
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  filter: "all" | "pending" | "done";
  categories: Category[];
}) {
  const [show, setShow] = useState(false);

  // Hide/Show the scrollbar dialog
  document.body.style.overflow = show ? "hidden" : "auto";
  return (
    <header
      className={`flex items-center justify-between p-8 py-6 font-bold ${
        theme == "light" ? "bg-primary" : "bg-gray-800"
      }`}
    >
      <h1
        className={`text-3xl ${
          theme == "light" ? "text-neutral" : "text-black"
        }`}
      >
        To-Do list
      </h1>

      {show && (
        <CreateTaskModal
          theme={theme}
          categories={categories}
          setTasks={setTasks}
          filter={filter}
          setShow={setShow}
        />
      )}
      <div className="flex gap-2">
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <button
          onClick={() => {
            setShow(true);
          }}
          className={`${theme == "light" ? "btn" : "btn-dark"} p-2`}
        >
          Create task
        </button>
      </div>
    </header>
  );
}
