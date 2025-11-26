import axios from 'axios';

axios.defaults.withCredentials = true; 

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }, 
});


export default axiosInstance;