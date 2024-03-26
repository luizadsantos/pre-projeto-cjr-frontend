import { Task } from "@/models/task";
import { Dispatch, SetStateAction } from "react";

const filters = [
  { value: "all", option: "All tasks" },
  { value: "done", option: "Done tasks" },
  { value: "pending", option: "Pending tasks" },
];

function Options() {
  const options = filters.map(({ value, option }, index) => {
    return (
      <option key={index} value={value}>
        {option}
      </option>
    );
  });

  return options;
}

export default function Filter({
  filter,
  setFilter,
  setTasks,
}: {
  filter: "all" | "done" | "pending";
  setFilter: Dispatch<SetStateAction<"all" | "done" | "pending">>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  return (
    <select
      name="filter"
      onChange={(e) => {
        const newFilter = e.target.value as "all" | "done" | "pending";
        setFilter(newFilter);
      }}
      className="appearance-none btn text-center w-64 py-2 font-medium outline-none"
    >
      <Options />
    </select>
  );
}
