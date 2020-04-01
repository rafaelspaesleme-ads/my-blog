
import axios from 'axios';

import { getToken } from "./auth";

const path = 'http://localhost:8081';

const api = axios.create({baseURL: path});


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
