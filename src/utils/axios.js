import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
});
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization =  `Bearer ${token ? JSON.parse(token) : null}`;
   
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// export default async (endpoint) => {
//   const response = await axios(`${config.apiBaseUrl}${endpoint}`);
//   const data = await response.json();
//   return data;
// };
