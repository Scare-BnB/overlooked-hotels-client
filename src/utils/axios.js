import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_PROD ? "https://the-overlooked-hotels-fa14e4d47922.herokuapp.com" : "http://localhost:4000",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token !== null) {
    config.headers.Authorization = token;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
    // localStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;