"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: uuidv4(), text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t))); 
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-6 uppercase tracking-widest shadow-lg">KING TODO APP</h1>
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
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-lg space-y-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-white text-black p-4 rounded-lg shadow-lg"
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTaskCompletion(t.id)}
              className="mr-4 w-6 h-6"
            />
            <input
              type="text"
              className={`border-none focus:ring-0 flex-grow text-lg ${t.completed ? 'line-through text-gray-500' : ''}`}
              value={t.text}
              onChange={(e) => updateTask(t.id, e.target.value)}
            />
            <button
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg ml-4 hover:bg-red-400"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
