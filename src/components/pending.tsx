import { Task } from "@/models/task";

interface Parameter {
  tasks: Task[];
}

export default function Pending({ tasks }: Parameter) {
  const pending = tasks.filter((task) => task.isActive).length;

  return (
    <span className="font-semibold">
      {pending} pending task{pending == 1 ? "" : "s"}
    </span>
  );
}
