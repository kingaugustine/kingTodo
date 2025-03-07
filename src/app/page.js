"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputComponent from "../components/InputComponent";
import TasksList from "../components/TasksList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: uuidv4(), text: taskText, completed: false }]);
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
      <InputComponent addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}
