import { useState, useEffect } from "react";
import Login from "./components/login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/tasklista";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // Cargar usuario al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
    setLoading(false);
  }, []);

  // Cargar tareas del usuario
  useEffect(() => {
    if (user) {
      const savedTasks =
        JSON.parse(localStorage.getItem(`tasks_${user}`)) || [];
      setTasks(savedTasks);
    } else {
      setTasks([]);
    }
  }, [user]);

  // Guardar tareas en localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`tasks_${user}`, JSON.stringify(tasks));
    }
  }, [tasks, user]);

  // Añadir tarea
  const addTask = (text, description, author) => {
    const newTask = {
      id: Date.now(),
      author: author || "Sin autor",
      text,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Cambiar estado de completada
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Filtrar tareas
  const filteredTasks = tasks.filter(
    (t) =>
      t.author.toLowerCase().includes(filter.toLowerCase()) ||
      t.description.toLowerCase().includes(filter.toLowerCase())
  );

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Pantalla de carga
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-pink-100">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-lg font-semibold text-gray-700">Cargando tareas</p>
      </div>
    );
  }

  // Pantalla de login
  if (!user) {
    return <Login setUser={setUser} />;
  }

  // Pantalla principal
  return (
    <div className="min-h-screen bg-pink-100">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-6 relative">
          <h1 className="text-3xl font-bold text-center">Team To-Do</h1>

          <div className="absolute right-4 top-0 flex items-center gap-3">
            <span className="text-gray-700 font-medium">
              Bienvenido {user}
            </span>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        <TaskForm addTask={addTask} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
