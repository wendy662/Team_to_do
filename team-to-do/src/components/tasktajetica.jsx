export default function TaskTajetica({ task, onToggle, onDelete }) {
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

      <div className="flex items-center gap-2 mt-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 cursor-pointer"
        />
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
