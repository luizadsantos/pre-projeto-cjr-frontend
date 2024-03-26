import { Dispatch, SetStateAction, useState } from "react";
import Confirm from "./confirm";
import { TaskService } from "@/services/taskService";
import fetchData from "@/utils/updateData";
import showError from "@/utils/errorHandling";
import { Task } from "@/models/task";

export default function DeleteDone({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  const [show, setShow] = useState(false);

  async function deleteDoneTasks() {
    const taskService = new TaskService();

    try {
      await taskService.deleteDoneTasks();
      fetchData({ setTasks });
    } catch (error) {
      showError(error);
    }
  }

  const tasksDone = tasks
    .filter((task) => !task.isActive)
    .map((task) => task.name)
    .join(", ");

  // Hide/Show the confirm dialog
  document.body.style.overflow = show ? "hidden" : "auto";

  return (
    <>
      {show && (
        <Confirm
          execute={deleteDoneTasks}
          message={"Do you really want to delete the tasks " + tasksDone + "?"}
          setShow={setShow}
        />
      )}
      <button
        onClick={() => {
          setShow(true);
        }}
        className="btn font-bold px-6 py-0.5"
      >
        Delete done
      </button>
    </>
  );
}
