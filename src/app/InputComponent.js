"use client";

import { useState } from "react";

export default function InputComponent({ addTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <div className="flex space-x-4 mb-6 w-full max-w-lg">
      <input
        type="text"
        className="flex-grow border rounded px-4 py-2 text-black shadow-md"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-300"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}
