import Trash from "@/icons/trash";
import { Category } from "@/models/category";
import { Task } from "@/models/task";
import { TaskService } from "@/services/taskService";
import showError from "@/utils/errorHandling";
import fetchData from "@/utils/updateData";
import { Dispatch, SetStateAction, useState } from "react";
import Confirm from "./confirm";

async function UpdateDone(
  taskState: Task,
  setTaskState: Dispatch<SetStateAction<Task>>,
  setTasks: Dispatch<SetStateAction<Task[]>>,
) {
  const taskService = new TaskService();
  const newTask = { ...taskState, isActive: !taskState.isActive } as Task;

  try {
    await taskService.updateTask(newTask);
  } catch (error) {
    showError(error);
  }

  fetchData({ setTasks });
  setTaskState(newTask);
}

export default function TaskDiv({
  task,
  categories,
  setTasks,
  key,
}: {
  task: Task;
  categories: Category[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  key: number;
}) {
  const [taskState, setTaskState] = useState(task);
  const [show, setShow] = useState(false);

  async function deleteTask() {
    const taskService = new TaskService();

    try {
      const newTask = await taskService.deleteTask(taskState.id);
      fetchData({ setTasks });
      setTaskState(newTask);
    } catch (error) {
      showError(error);
    }
  }

  document.body.style.overflow = show ? "hidden" : "auto";

  return (
    <div className="flex justify-between items-center border-2 border-black rounded-lg p-4">
      {show ? (
        <Confirm
          execute={deleteTask}
          message={
            'Do you really want to delete the task "' + taskState.name + '"?'
          }
          setShow={setShow}
          key={key}
        />
      ) : (
        ""
      )}
      <div className="flex gap-8 items-center w-full">
        <div className="flex gap-4">
          <button
            onClick={() => {
              UpdateDone(taskState, setTaskState, setTasks);
            }}
            className={
              "size-6 border-2 border-black rounded-lg" +
              (taskState.isActive ? "" : " bg-primary")
            }
          />
          <span className="font-semibold">Done</span>
        </div>

        <span className="text-xl font-bold max-w-48 w-full">
          {taskState.name}
        </span>

        <span className="bg-primary text-neutral font-medium border-2 border-black p-2 rounded-lg text-center max-w-36 w-full">
          {categories.find((category) => category.id == taskState.categoryId)
            ?.name ?? "(No category)"}
        </span>
      </div>

      <button
        onClick={() => {
          setShow(true);
        }}
        className="btn p-1"
      >
        <Trash />
      </button>
    </div>
  );
}
