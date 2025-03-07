"use client";

export default function TasksList({ tasks, deleteTask, updateTask, toggleTaskCompletion }) {
  return (
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
  );
}
