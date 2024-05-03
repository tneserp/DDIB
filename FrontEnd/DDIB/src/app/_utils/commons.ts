import axios from "axios";

const BASE_URL = "";

const PublicAxiosApi = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });

  return instance;
};

const ClientAxiosApi = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });

  const token = "";
  instance.defaults.headers.common["Authorization"] = token;

  return instance;
};

export { PublicAxiosApi, ClientAxiosApi };
