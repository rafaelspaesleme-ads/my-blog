import axios from 'axios';
import { getToken } from "./auth";

const apiDevRpi = 'http://192.168.0.102:8081/api/blog';
const apiDevLocal = 'http://localhost:8081/api/blog';
const apiDevServer = 'https://myblog-api-rpl.herokuapp.com/api/blog'


const api = axios.create({baseURL: apiDevLocal});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;