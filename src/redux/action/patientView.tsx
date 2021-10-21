import { apiCall, METHOD } from "../../service/baseApiCall";
import { PATIENT_DASHBOARD,PATIENT_VIEW } from "../constants/action-types";
import {GET_PATIENT_VIEW, GET_PATIENT_VIEW_DASHBOARD } from "../../service/apiEndPoints";
import { Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
// import { AxiosResponse } from "axios";

// export type ActionTypes =
//   | { type: typeof GET_PATIENT.GET_PATIENT_INITIALIZATION; payload: Posts[] }
//   | { type: typeof GET_PATIENT.GET_PATIENT_SUCCESS; payload: Posts[] }
//   | { type: typeof GET_PATIENT.GET_PATIENT_ERROR; payload: Posts[] }
export const getPatientView = (id:number): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  console.log(id)
  dispatch(getPatientViewInit(id));
};
export const getPatientViewInit = (id:number): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  console.log("==>init")
  dispatch({
    type: PATIENT_VIEW.PATIENT_VIEW_INITIALIZATION
  });
  apiCall(
    // "v1/user/contact?role=patient",
    GET_PATIENT_VIEW+`${id}`,
    {
    },
    (res: Object) => dispatch(getPatientViewSuccess(res)),
    () => dispatch(getPatientViewError()),
    METHOD.GET,
    {}
  );
  console.log(GET_PATIENT_VIEW+`${id}`)
  // dispatch(getPatientViewSuccess());
};

export const getPatientViewSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: PATIENT_VIEW.PATIENT_VIEW_SUCCESS,
    payload: res.data
  });
  console.log(res)
};

export const getPatientViewError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: PATIENT_VIEW.PATIENT_VIEW_ERROR
  });
};
export const getPatientDashboard = (id:string,start:number,end:number): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getPatientDashboardInit(id,start,end));
};
export const getPatientDashboardInit = (id:string,start:number,end:number): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: PATIENT_DASHBOARD.PATIENT_DASHBOARD_INITIALIZATION
  });
  apiCall(
    // "v1/user/contact?role=patient",
    GET_PATIENT_VIEW_DASHBOARD+`${id}/alertSnapshot?start=${start}&end=${end}`,
    {
    },
    (res: Object) => dispatch(getPatientDashboardSuccess(res)),
    () => dispatch(getPatientDashboardError()),
    METHOD.GET,
    {}
  );
  // dispatch(getPatientDashboardSuccess());
};

export const getPatientDashboardSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: PATIENT_DASHBOARD.PATIENT_DASHBOARD_SUCCESS,
    payload: res
  });
  console.log(res)
};

export const getPatientDashboardError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: PATIENT_DASHBOARD.PATIENT_DASHBOARD_ERROR
  });
};

