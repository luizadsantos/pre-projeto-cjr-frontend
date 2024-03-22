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
      <div className="flex gap-8 items-center w-full">
        <div className="flex gap-4">
          <button
            className={
              "size-6 border-2 border-black rounded-lg" +
              (task.isActive ? "" : " bg-primary")
            }
          />
          <span className="font-semibold">Done</span>
        </div>

        <span className="text-xl font-bold max-w-48 w-full">{task.name}</span>

        <span className="bg-primary text-neutral font-medium border-2 border-black p-2 rounded-lg text-center max-w-36 w-full">
          {categories.find((category) => category.id == task.categoryId)
            ?.name ?? "(No category)"}
        </span>
      </div>

      <button className="p-1 border-2 border-black hover:bg-primary hover:text-neutral rounded-lg">
        <Trash />
      </button>
    </div>
  );
}
