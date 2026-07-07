import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProjects = () => api.get("/projects");
export const getSkills = () => api.get("/skills");
export const getExperience = () => api.get("/experiences");
export const submitContact = (payload) => api.post("/contact", payload);

export default api;
