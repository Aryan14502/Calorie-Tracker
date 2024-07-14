import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // default base URL
  timeout: 10000, // default timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;