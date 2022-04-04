import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ADDRESS,
  withCredentials: true,
});

export default apiClient;
