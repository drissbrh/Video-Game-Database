import axios from "axios";

const API_URL = "/api/v1/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const Login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const logout = () => {
  localStorage.removeItem("user");
  document.location.href = "/login";
};

const authService = {
  register,
  logout,
  Login,
};

export default authService;
