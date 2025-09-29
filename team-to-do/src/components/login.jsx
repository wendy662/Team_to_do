export default function Login({ setUser }) {
  const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    if (user === "user1" || user === "user2") {
      localStorage.setItem("user", user); 
      setUser(user);
    } else {
      alert("Usuario no válido (use user1 o user2)");
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
        <input
          name="username"
          placeholder="Ingrese usuario (user1 o user2)"
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-blue-400 text-white p-2 rounded-md hover:bg-pink-600 transition-all shadow-md"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
