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

  useEffect(() => {
    fetchData({ setTasks, setCategories });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col px-16 pb-4">
        <div className="flex justify-between items-center py-3">
          <Pending tasks={tasks} />

          <Filter />

          <DeleteDone />
        </div>

        <TasksContainer
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
        />
      </main>
    </>
  );
}
