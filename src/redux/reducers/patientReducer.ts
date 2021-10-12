/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
import {  GET_CONTACT, GET_ALERT_COUNT } from "../constants/action-types";
import { PatientData } from "../Actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../action";

const initialState = {
  progress: false,
  isLoading: false,
  contact: [],
  alertCount:[]
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: PatientData = initialState, action: ActionTypes) => {
    switch (action.type) {
     case GET_CONTACT.GET_CONTACT_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case GET_CONTACT.GET_CONTACT_SUCCESS:
        const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        return {
          ...state,
          isLoading: false,
          contact: allPost
        };

      case GET_CONTACT.GET_CONTACT_ERROR:
        return {
          ...state,
          isLoading: false
        };
        case GET_ALERT_COUNT.GET_ALERT_COUNT_INITIALIZATION:
          return {
            ...state,
            isLoading: true
          };
  
        case GET_ALERT_COUNT.GET_ALERT_COUNT_SUCCESS:
          // const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
          return {
            ...state,
            isLoading: false,
            alertCount: action.payload
          };
  
        case GET_ALERT_COUNT.GET_ALERT_COUNT_ERROR:
          return {
            ...state,
            isLoading: false
          };

      default:
        return state;
    }
  }
);

export default reducer;
