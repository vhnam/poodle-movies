import axios from 'axios';

const api = axios;

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
  config.baseURL = process.env.REACT_APP_BASE_URL;
  return config;
});

export default api;
