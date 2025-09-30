import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();      
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(username, password); 
    if (success) {
      navigate("/dashboard"); 
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-pink-300">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Bienvenido a Team to do
        </h2>

        {/* input para ingresar el Usuario */}
        <input
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* input para ingresar la Contraseña */}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Botón para iniciar sesión*/}
        <button
          className="bg-blue-400 text-white p-2 rounded-md hover:bg-pink-600 transition-all shadow-md"
        >
          Iniciar Sesión
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}
