export default function TaskItem({ task, toggleTask }) {
  return (
    <div
      className={`min-w-[220px] p-6 rounded-xl shadow-md transition-all duration-200 border-l-4
        ${
          task.completed
            ? "bg-green-200 border-green-500" 
            : "bg-yellow-100 border-yellow-500 hover:shadow-lg" 
        }
      `}
    >
      <div>
        <h3
          className={`font-semibold ${
            task.completed
              ? "line-through text-gray-600"
              : "text-gray-900"
          }`}
        >
          {task.description}
        </h3>
        <p className="text-sm text-gray-500">{task.author}</p>
      </div>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 mt-3 cursor-pointer"
      />
    </div>
  );
}
