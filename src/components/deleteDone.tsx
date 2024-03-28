import { Dispatch, SetStateAction, useState } from "react";
import Confirm from "./confirm";
import { TaskService } from "@/services/taskService";
import fetchData from "@/utils/updateData";
import { showError } from "@/utils/errorHandling";
import { Task } from "@/models/task";

export default function DeleteDone({
  theme,
  tasks,
  setTasks,
  filter,
}: {
  theme: "light" | "dark";
  tasks: Task[];
  filter: "all" | "pending" | "done";
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  const [show, setShow] = useState(false);

  async function deleteDoneTasks() {
    const taskService = new TaskService();

    try {
      await taskService.deleteDoneTasks();
      fetchData({ setTasks, filter });
    } catch (error) {
      showError(error);
    }
  }

  const tasksDone = tasks
    .filter((task) => !task.isActive)
    .map((task) => task.name)
    .join(", ");

  // Hide/Show the scrollbar
  document.body.style.overflow = show ? "hidden" : "auto";

  return (
    <>
      {show && (
        <Confirm
          theme={theme}
          execute={deleteDoneTasks}
          message={"Do you really want to delete the tasks " + tasksDone + "?"}
          setShow={setShow}
        />
      )}
      <button
        onClick={() => {
          setShow(true);
        }}
        className={`${
          theme == "light" ? "btn" : "btn-dark"
        } font-bold px-6 py-0.5`}
      >
        Delete done
      </button>
    </>
  );
}
