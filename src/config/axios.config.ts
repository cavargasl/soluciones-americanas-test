import axios, { AxiosHeaders } from "axios";

const BASE_PATH = 'https://reqres.in/api';

axios.defaults.baseURL = BASE_PATH;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("token")
    const headers: AxiosHeaders = config.headers
    if (token) headers.set({ Authorization: `Bearer ${token}` })
    return config
  },
  error => {
    Promise.reject(error)
  }
)