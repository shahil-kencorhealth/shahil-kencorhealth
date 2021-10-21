import { apiCall, METHOD } from "../../service/baseApiCall";
import { LOGIN, REGISTER, FORGOT_PASSWORD, GET_POSTS, UPDATE_POSTS, DELETE_POSTS, ADD_POSTS, GET_PATIENT } from "../constants/action-types";
import {  Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { setToken } from "../../util/utils";
import { USER_SIGNIN } from "../../service/apiEndPoints";
// import { AxiosResponse } from "axios";


export const login = (email:any, password:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(loginInit(email, password));
};

export const loginInit = (email:any, password:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_INITLIZATION
  });
  apiCall(
    USER_SIGNIN,
    {
      email: email,
      mobileNumber: email,
      token: password
    },
    (res: Object) => dispatch(loginSuccess(res, email, password)),
    (err:any) => { console.log("ERROR in CONTACT", err); dispatch(loginError())},
    METHOD.PUT,
    {}
  );
};

export const loginSuccess = (res:any, email:any, password:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  
  setToken("login-auth-token", res.authOutput.authToken).then(function () {
    setToken("kencor-user", JSON.stringify(res));
    setToken("isLoggedIn", 'true');
    
    dispatch({
      type: LOGIN.LOGIN_SUCCESS,
      payload: {response:res, email, password }
    });
  });

};

export const loginError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_ERORR
  });
};
