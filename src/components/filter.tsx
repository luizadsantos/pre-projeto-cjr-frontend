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
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<"all" | "done" | "pending">>;
}) {
  return (
    <select
      name="filter"
      onChange={(e) => setFilter(e.target.value as "all" | "done" | "pending")}
      className="appearance-none bg-neutral rounded-lg text-center w-64 py-2 font-medium hover:cursor-pointer hover:bg-primary hover:text-neutral border-2 border-black outline-none"
    >
      <Options />
    </select>
  );
}
