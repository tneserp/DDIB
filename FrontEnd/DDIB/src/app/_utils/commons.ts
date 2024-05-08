import axios from "axios";
import { userStore } from "../_store/user";
import Cookies from "js-cookie";

// const BASE_URL = "http://localhost:9090";
const BASE_URL = "http://ddib.kro.kr";
//const BASE_URL = "https://k10c102.p.ssafy.io";

const PublicAxiosApi = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });

  //const token = Cookies.get("jwt");

  instance.defaults.headers.common["Authorization"] =
    "BearereyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsImVtYWlsIjoia245MDEyQG5hdmVyLmNvbSIsImlhdCI6MTcxNTA3MjQ3MSwiZXhwIjoxNzE1MDc2MDcxfQ.JKq1KrUusRgpg1FHL7uW7F6ce9qoUSXdxXy0eVuwxf8";
  return instance;
};

const ClientAxiosApi = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });

  //const token = "";
  //instance.defaults.headers.common["Authorization"] = token;
  instance.defaults.headers.common["Authorization"] =
    "BearereyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsImVtYWlsIjoia245MDEyQG5hdmVyLmNvbSIsImlhdCI6MTcxNTA3MjQ3MSwiZXhwIjoxNzE1MDc2MDcxfQ.JKq1KrUusRgpg1FHL7uW7F6ce9qoUSXdxXy0eVuwxf8";

  return instance;
};

export { PublicAxiosApi, ClientAxiosApi };
