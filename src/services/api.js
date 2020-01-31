import axios from 'axios';

const api = axios.create({baseURL: 'https://myblog-api-rpl.herokuapp.com/api'});

export default api;