import Trash from "@/icons/trash";
import { Category } from "@/models/category";
import { Task } from "@/models/task";
import { TaskService } from "@/services/taskService";
import { showError } from "@/utils/errorHandling";
import fetchData from "@/utils/updateData";
import { Dispatch, SetStateAction, useState } from "react";
import Confirm from "./confirm";

async function UpdateDone(
  taskState: Task,
  setTaskState: Dispatch<SetStateAction<Task>>,
  setTasks: Dispatch<SetStateAction<Task[]>>,
  filter: "all" | "pending" | "done",
) {
  const taskService = new TaskService();
  const newTask = { ...taskState, isActive: !taskState.isActive } as Task;

  try {
    await taskService.updateTask(newTask);
  } catch (error) {
    showError(error);
  }

  fetchData({ setTasks, filter });
  setTaskState(newTask);
}

export default function TaskDiv({
  theme,
  task,
  categories,
  setTasks,
  index,
  filter,
}: {
  theme: "light" | "dark";
  task: Task;
  categories: Category[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  index: number;
  filter: "all" | "pending" | "done";
}) {
  const [taskState, setTaskState] = useState(task);
  const [show, setShow] = useState(false);

  async function deleteTask() {
    const taskService = new TaskService();

    try {
      const newTask = await taskService.deleteTask(taskState.id);
      fetchData({ setTasks, filter });
      setTaskState(newTask);
    } catch (error) {
      showError(error);
    }
  }

  // Hide/Show the scrollbar
  document.body.style.overflow = show ? "hidden" : "auto";

  return (
    <div
      className={`flex justify-between items-center border-2 ${
        theme == "light" ? "border-black" : "border-neutral"
      } rounded-lg p-4`}
    >
      {show ? (
        <Confirm
          theme={theme}
          execute={deleteTask}
          message={
            'Do you really want to delete the task "' + taskState.name + '"?'
          }
          setShow={setShow}
          key={index}
        />
      ) : (
        ""
      )}
      <div className="flex gap-8 items-center w-full">
        <div className="flex gap-4">
          <button
            onClick={() => {
              UpdateDone(taskState, setTaskState, setTasks, filter);
            }}
            className={`size-6 border-2 rounded-lg ${
              theme == "light"
                ? !taskState.isActive
                  ? "border-black bg-primary"
                  : "border-black bg-neutral"
                : !taskState.isActive
                ? "border-neutral bg-gray-800"
                : "border-neutral bg-black"
            }`}
          />
          <span className="font-semibold">Done</span>
        </div>

        <span className="text-xl font-bold max-w-48 w-full">
          {taskState.name}
        </span>

        <span
          className={`${
            theme == "light"
              ? "bg-primary border-black"
              : "bg-gray-800 border-neutral"
          } text-neutral font-medium border-2 p-2 rounded-lg text-center max-w-36 w-full`}
        >
          {categories.find((category) => category.id == taskState.categoryId)
            ?.name ?? "(No category)"}
        </span>
      </div>

      <button
        onClick={() => {
          setShow(true);
        }}
        className={`${theme == "light" ? "btn" : "btn-dark"} p-1`}
      >
        <Trash />
      </button>
    </div>
  );
}
