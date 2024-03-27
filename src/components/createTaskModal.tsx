import { Category } from "@/models/category";
import { Task, type CreateTask } from "@/models/task";
import { TaskService } from "@/services/taskService";
import { showError } from "@/utils/errorHandling";
import fetchData from "@/utils/updateData";
import { Dispatch, SetStateAction, useState } from "react";

function Options({ categories }: { categories: Category[] }) {
  const options = categories.map(({ id, name }, index) => {
    return (
      <option key={index} value={id}>
        {name}
      </option>
    );
  });

  return options;
}

export default function CreateTaskModal({
  setTasks,
  setShow,
  filter,
  categories,
}: {
  setTasks: Dispatch<SetStateAction<Task[]>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  filter: "all" | "pending" | "done";
  categories: Category[];
}) {
  const taskService = new TaskService();
  const [formData, setFormData] = useState({
    name: "",
  } as CreateTask);

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.categoryId == -1) formData.categoryId = undefined;
    try {
      await taskService.createTask(formData);

      // Reset form after successful submission
      setFormData({
        name: "",
      } as CreateTask);
      fetchData({ setTasks, filter });
      setShow(false);
    } catch (error) {
      showError(error);
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full flex items-center justify-center h-full overflow-hidden bg-opacity-40 bg-black">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 p-4 rounded-lg items-center opacity-100 w-2/3 bg-neutral"
      >
        <button
          className="absolute top-2 right-2 btn px-2.5 py-1 font-bold"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </button>
        <h1 className="text-3xl font-bold">Create Task</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            type="text"
            name="name"
            required
            onInput={handleInput}
            className="border-2 border-black p-1 rounded-lg focus:bg-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="input-categoryId">Category</label>
          <select
            name="filter"
            onChange={handleInput}
            className="appearance-none btn text-center w-64 py-2 font-medium outline-none"
          >
            <option value={-1}>(No category)</option>
            <Options categories={categories} />
          </select>
        </div>

        <button type="submit" className="btn py-2 px-8">
          Send
        </button>
      </form>
    </div>
  );
}
