import Trash from "@/icons/trash";
import { Category } from "@/models/category";
import { Task } from "@/models/task";

export default function TaskDiv({
  task,
  categories,
}: {
  task: Task;
  categories: Category[];
}) {
  return (
    <div className="flex justify-between items-center border-2 border-black rounded-lg p-4">
      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
          <button className="size-6 border-2 border-black rounded-lg" />
          <span className="font-semibold">Done</span>
        </div>

        <span className="text-xl font-bold">{task.name}</span>

        <span className="bg-black text-white p-2 rounded-lg">
          {categories.find((category) => category.id == task.categoryId)
            ?.name ?? "(No category)"}
        </span>
      </div>

      <button className="p-1 bg-red-500 border-2 border-black rounded-lg">
        <Trash />
      </button>
    </div>
  );
}
