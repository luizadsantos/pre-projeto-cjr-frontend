const filters = ["All tasks", "Pending tasks", "Done tasks"];

function Options() {
  const options = filters.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return options;
}

export default function Filter() {
  return (
    <select
      name="filter"
      className="appearance-none bg-neutral rounded-lg text-center w-64 py-2 font-medium hover:cursor-pointer hover:bg-primary hover:text-neutral border-2 border-black outline-none"
    >
      <Options />
    </select>
  );
}
