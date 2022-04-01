import axios, { AxiosRequestConfig } from "axios";

export const axiosAuthInterceptor = () => {
  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const user = localStorage.getItem("userData");
    if (user && config.url) {
      const { token } = JSON.parse(user);
      config.url = `${config.url}?auth=${token}`;
    }
    return config;
  }, (error: Error) => {
    return Promise.reject(error);
  });
};