import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("⚠️ Ingresa un usuario válido (tati o wen)");
      return;
    }

    const cleanName = name.trim().toLowerCase();

    const success = login(cleanName); 
    if (success) {
      navigate("/"); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-pink-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 whitespace-nowrap">
          Bienvenido a <span className="text-pink-500">Team To-Do</span>
        </h2>

        <input
          type="text"
          placeholder="Ingrese usuario (tati o wen)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded-md hover:bg-pink-600 transition-all shadow-md"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
