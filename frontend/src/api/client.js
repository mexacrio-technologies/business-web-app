import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    || (import.meta.env.PROD ? 'http://localhost:5000' : '');

const apiClient = axios.create({
    baseURL: `${apiBaseUrl.replace(/\/+$/, '')}/api/v1`
});

export default apiClient;
