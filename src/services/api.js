import axios from 'axios';

const apiDevRpi = 'http://192.168.0.102:8081/api/blog';
const apiDevLocal = 'http://localhost:8081/api/blog';
const apiDevServer = 'https://myblog-api-rpl.herokuapp.com/api/blog'


const api = axios.create({baseURL: apiDevLocal});

export default api;