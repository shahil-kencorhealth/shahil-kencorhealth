import { apiCall, METHOD } from "../../service/baseApiCall";
import { GET_CONTACT, GET_ALERT_COUNT } from "../constants/action-types";
import { Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
// import { AxiosResponse } from "axios";

// export type ActionTypes =
//   | { type: typeof GET_CONTACT.GET_CONTACT_INITIALIZATION; payload: Posts[] }
//   | { type: typeof GET_CONTACT.GET_CONTACT_SUCCESS; payload: Posts[] }
//   | { type: typeof GET_CONTACT.GET_CONTACT_ERROR; payload: Posts[] }



export const getContact = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getContactInit());
};
export const getContactInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_CONTACT.GET_CONTACT_INITIALIZATION
  });
  apiCall(
    "https://test.kencorhealth.com/rx/api/v1/user/contact?role=patient",
    {
    },
    (res: Object) => dispatch(getContactSuccess(res)),
    () => dispatch(getContactError()),
    METHOD.GET,
    {}
  );
  // dispatch(getContactSuccess());
};

export const getContactSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_CONTACT.GET_CONTACT_SUCCESS,
    payload: res.userInfos
  });
};

export const getContactError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_CONTACT.GET_CONTACT_ERROR
  });
};


export const getAlertCount = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getAlertCountInit());
};
export const getAlertCountInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_ALERT_COUNT.GET_ALERT_COUNT_INITIALIZATION
  });
  apiCall(
    "patient/alertCounts",
    {
    },
    (res: Object) => dispatch(getAlertCountSuccess(res)),
    () => dispatch(getAlertCountError()),
    METHOD.GET,
    {}
  );
  // dispatch(getAlertCountSuccess());
};

export const getAlertCountSuccess = (res: any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  console.log("ALERT COUNT RESOPNSE", res);
  dispatch({
    type: GET_ALERT_COUNT.GET_ALERT_COUNT_SUCCESS,
    payload: res
  });
};

export const getAlertCountError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_ALERT_COUNT.GET_ALERT_COUNT_ERROR
  });
};

