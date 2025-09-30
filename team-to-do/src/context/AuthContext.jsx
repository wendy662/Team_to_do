import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Revisar si hay un usuario guardado en localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser); 
    }
  }, []);


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);


  const login = (username) => {
    const fakeUsers = ["tati", "wen"];
    const cleanUsername = username.trim().toLowerCase();

    if (fakeUsers.includes(cleanUsername)) {
      setUser(cleanUsername);
      localStorage.setItem("user", cleanUsername); 
      toast.success(`✅ Bienvenido ${cleanUsername}!`);
      return true;
    } else {
      toast.error("❌ Usuario no válido (usa tati o wen)");
      return false;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); 
    toast.info("👋 Sesión cerrada");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
