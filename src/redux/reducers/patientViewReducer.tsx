/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
import { PATIENT_DASHBOARD, PATIENT_VIEW } from "../constants/action-types";
import { PatientViewData } from "../Actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../action";

const initialState = {
  progress: false,
  isLoading: false,
  isCalenderLoading:false,
  patient:{},
  data:[]
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: PatientViewData = initialState, action: ActionTypes) => {
    switch (action.type) {
      case PATIENT_VIEW.PATIENT_VIEW_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case PATIENT_VIEW.PATIENT_VIEW_SUCCESS:
        const patientData = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        return {
          ...state,
          isLoading: false,
          patient: patientData
        };

      case PATIENT_VIEW.PATIENT_VIEW_ERROR:
        return {
          ...state,
          isLoading: false
        };
      

     case PATIENT_DASHBOARD.PATIENT_DASHBOARD_INITIALIZATION:
        return {
          ...state,
          isCalenderLoading: true
        };

      case PATIENT_DASHBOARD.PATIENT_DASHBOARD_SUCCESS:
        const calenderData = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        return {
          ...state,
          isCalenderLoading: false,
          data: calenderData
        };

      case PATIENT_DASHBOARD.PATIENT_DASHBOARD_ERROR:
        return {
          ...state,
          isCalenderLoading: false
        };
      
      default:
        return state;
    }
  }
);

export default reducer;
