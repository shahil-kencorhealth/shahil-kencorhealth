import axios from "axios";
//  import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken, valiadteToken } from "../util/utils";

console.log("get Tken", getToken("login-auth-token"));
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // "https://run.mocky.io/v3"
  // timeout: 1000,
  // headers: {Authorization: `Bearer ${getTokens("login-auth-token")}`}
});
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;


instance.interceptors.request.use(req => {
  if (valiadteToken()) {
    const token = getToken("login-auth-token");
    const auth = token ? `Bearer ${token}` : '';
    req.headers.common['Authorization'] = auth;
  }
  return req;
});

instance.interceptors.response.use(res => {
  try {
    if (res.status === 200 && res.data !== '') {
      // toast.success("Request Success");
      return res;
    } else {
      toast.error('Somthing went wrong.');
    }
  } catch (err) {
    toast.error(res.data.data.message);
  }
  return res;
});

export default instance;
