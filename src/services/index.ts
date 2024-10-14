import axios from "axios";

const api = axios.create({
    baseURL: "https://sapatin.onrender.com"
});

export default api;