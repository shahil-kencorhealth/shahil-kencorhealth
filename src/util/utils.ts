import axios from "axios";
import moment from 'moment';

export const valiadteToken = () => {
  const token = getToken("login-auth-token");
  const isLoggedIn = getToken("isLoggedIn");
  if (token && isLoggedIn) {
    return true;
  }
  return false;
};

export const getToken = (key: string) => {
  return localStorage.getItem(key);
};

export const setToken = (key: string, token: string) => {
  return Promise.resolve().then(function () {
    localStorage.setItem(key, token);
  });
  };

export const getPostData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = response;
  console.log(response);
  return data;
  // });
};


export const formatDate = (dateJson: any) => {
  const date = new Date(dateJson);
  // const format = 'DD/MM/yyyy';
  const format1 = 'YYYY-MM-DD';
  console.log("DAte FORMATED", moment(date).format(format1));
  return moment(date).format(format1);
}


export const formatDateTime = (dateJson: any) => {
  const date = new Date(dateJson);
  // const format = 'DD/MM/yyyy';
  const format1 = 'YYYY-MM-DD HH:mm:s';
  console.log("DAte FORMATED", moment(date).format(format1));
  return moment(date).format(format1);
}
