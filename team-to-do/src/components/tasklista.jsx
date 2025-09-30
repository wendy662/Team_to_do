import TaskTajetica from "./tasktajetica";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 italic mt-4">
        No hay tareas
      </p>
    );
  }

  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div className="mt-6">
      {pending.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2">Tareas Pendientes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 justify-items-start">
            {pending.map((task) => (
              <TaskTajetica
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </>
      )}

      {completed.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2">Tareas Completadas ✅</h2>
          <div className="flex flex-wrap gap-6 mb-8">
            {completed.map((task) => (
              <TaskTajetica
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
