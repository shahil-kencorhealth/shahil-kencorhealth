import axios from "axios";
//  import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../util/utils";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // "https://run.mocky.io/v3"
  // timeout: 1000,
  headers: {Authorization: `Bearer ${getToken("login-auth-token")}`}
});
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

instance.interceptors.request.use(req => {
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
