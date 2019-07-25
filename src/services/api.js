import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.meetapp.ninjastic.space',
});

export default api;
