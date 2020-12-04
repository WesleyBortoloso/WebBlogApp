import axios from 'axios';

const api = axios.create({
  baseURL: 'https://megacodeblog.herokuapp.com/',
});

export default api;  