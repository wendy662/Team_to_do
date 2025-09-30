import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api";
import Login from "./components/login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/tasklista";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, logout } = useAuth(); // 👈 ahora usamos el contexto
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // Obtener tareas desde json-server cuando hay usuario
  useEffect(() => {
    if (user) {
      setLoading(true);
      api
        .get("/tasks")
        .then((res) => setTasks(res.data))
        .catch((err) => {
          console.error("Error cargando tareas:", err);
          toast.error("❌ Error cargando tareas");
          setTasks([]);
        })
        .finally(() => {
          //  Esperar 1.5 segundos antes de ocultar el loader
          setTimeout(() => setLoading(false), 1500);
        });
    } else {
      setTasks([]);
      setLoading(false);
    }
  }, [user]);

  // Agregar nueva tarea
  const addTask = (title, description, author) => {
    const newTask = {
      id: crypto.randomUUID(),
      author: author || "Sin autor",
      title,
      description,
      completed: false,
    };

    api
      .post("/tasks", newTask)
      .then((res) => {
        setTasks((prev) => [...prev, res.data]);
        toast.success("✅ Tarea agregada correctamente");
      })
      .catch((err) => {
        console.error("Error agregando tarea:", err);
        toast.error("❌ Error al agregar tarea");
      });
  };

  // Cambiar estado de completado
  const toggleTask = (id, completed) => {
    api
      .patch(`/tasks/${id}`, { completed: !completed })
      .then((res) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
        toast.info(
          res.data.completed
            ? "🎉 Tarea completada"
            : "↩️ Tarea marcada como pendiente"
        );
      })
      .catch((err) => {
        console.error("Error actualizando tarea:", err);
        toast.error("❌ Error al actualizar tarea");
      });
  };

  // Filtrar tareas
  const filteredTasks = tasks.filter(
    (t) =>
      t.author.toLowerCase().includes(filter.toLowerCase()) ||
      t.description.toLowerCase().includes(filter.toLowerCase())
  );

  // Pantalla de carga
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-pink-100">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-lg font-semibold text-gray-700">
          Cargando tareas...
        </p>
      </div>
    );
  }


  if (!user) {
    return (
      <>
        <Login />
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }


  return (
    <div className="min-h-screen bg-pink-100">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-6 relative">
          <h1 className="text-3xl font-bold text-center">Team To-Do</h1>

          <div className="absolute right-4 top-0 flex items-center gap-3">
            <span className="text-gray-700 font-medium">Bienvenido {user}</span>
            <button
              onClick={logout}
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        <TaskForm addTask={addTask} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
