"use client";

import Header from "@/components/header";
import Pending from "@/components/pending";
import Filter from "@/components/filter";
import DeleteDone from "@/components/deleteDone";
import TasksContainer from "@/components/tasksContainer";
import { Task } from "@/models/task";
import { Category } from "@/models/category";
import { useEffect, useState } from "react";
import fetchData from "@/utils/updateData";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");

  useEffect(() => {
    fetchData({ setTasks, setCategories, filter });
  }, [filter]);

  return (
    <>
      <Header categories={categories} setTasks={setTasks} filter={filter} />
      <main className="flex flex-col px-16 pb-4">
        <div className="flex justify-between items-center py-3">
          <Pending tasks={tasks} />

          <Filter filter={filter} setFilter={setFilter} setTasks={setTasks} />

          <DeleteDone tasks={tasks} setTasks={setTasks} filter={filter} />
        </div>

        <TasksContainer
          filter={filter}
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
        />
      </main>
    </>
  );
}
