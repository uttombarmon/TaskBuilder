import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_URL || import.meta.env.VITE_URI,
});