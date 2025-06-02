import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/user";

const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

const loginUSer = (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};

const AuthServices = { registerUser, loginUSer };

export default AuthServices;
