import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
