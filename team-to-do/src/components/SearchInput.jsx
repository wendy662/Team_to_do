import { useState, useEffect } from "react";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch]); // 👈 Agregado onSearch

  return (
    <input
      type="text"
      placeholder="Buscar tarea..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border px-3 py-2 rounded w-full"
    />
  );
}
