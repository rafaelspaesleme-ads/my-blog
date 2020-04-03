
import axios from 'axios';

import { getToken } from "./auth";

const path = 'https://rpl-blog-backend.herokuapp.com';

const api = axios.create({baseURL: path});


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
