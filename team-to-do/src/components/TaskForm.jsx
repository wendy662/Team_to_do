import { useState } from "react";

export default function TaskForm({ addTask, setFilter }) {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return; 

    addTask("", description, author); 
    setAuthor("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mb-6 max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder=" Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded-md"
      />

      <textarea
  placeholder="Descripción"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="p-2 border rounded-md resize-none"  
  rows={3}
/>


      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Añadir
      </button>

      <input
        type="text"
        placeholder=" Buscar"
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded-md"
      />
    </form>
  );
}
