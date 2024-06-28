import axios from "axios";
import config from "../config";
import { isValidToken } from "./token";

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
});
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');
  if (token && isValidToken(JSON.parse(token))) config.headers.Authorization =  `Bearer ${JSON.parse(token)}`;
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
