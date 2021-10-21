import { apiCall, METHOD } from "../../service/baseApiCall";
import { GET_PHYSICIAN_URL } from "../../service/apiEndPoints";
import { GET_PHYSICIAN } from "../constants/action-types";
import { Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export const getPhysicians = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getPhysiciansInit());
};

export const getPhysiciansInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_PHYSICIAN.GET_PHYSICIAN_INITIALIZATION
  });
  apiCall(
  GET_PHYSICIAN_URL,
    // "v2/doctor",
    {
    },
    (res: Object) => dispatch(getPhysiciansSuccess(res)),
    () => dispatch(getPhysiciansError()),
    METHOD.GET,
    {}
  );
  // dispatch(getPhysiciansSuccess());
};

export const getPhysiciansSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_PHYSICIAN.GET_PHYSICIAN_SUCCESS,
    payload: res.data
  });
};

export const getPhysiciansError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_PHYSICIAN.GET_PHYSICIAN_ERROR
  });
};

