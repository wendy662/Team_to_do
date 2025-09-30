import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000"
});

export const getTasks = () => api.get("/tasks");
export const addTask = (task) => api.post("/tasks", task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);

export default api;
