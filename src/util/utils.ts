import axios from "axios";

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
