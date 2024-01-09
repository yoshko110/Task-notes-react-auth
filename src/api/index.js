import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});
instance.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default instance;
