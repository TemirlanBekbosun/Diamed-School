import axios from "axios";

const BASE_URL = "http://192.168.60.139:2025";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.withCredentials = false;

let customStore;

export const injectStore = (store) => {
  customStore = store;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const updateConfig = { ...config };
    updateConfig.headers = updateConfig.headers || {};

    const token = customStore?.getState?.()?.auth?.token;
    console.debug("Auth token:", token);
    if (token) updateConfig.headers.Authorization = `Bearer ${token}`;

    return updateConfig;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },

  (error) => {
    return Promise.reject(error);
  }
);
