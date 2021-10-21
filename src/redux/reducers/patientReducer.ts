/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
import {  GET_PATIENT, GET_ALERT_COUNT,UPDATE_PATIENT, GET_DEVICE, GET_DIAGNOSIS_TYPE, GET_VISIT_REASON,GET_APPOINTMENT } from "../constants/action-types";
import { PatientData } from "../Actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../action";

const initialState = {
  progress: false,
  isLoading: false,
  contact: [],
  alertCount:[],
  devices: [],
  diagnosisType: [],
  visitReasons: [],
  appointments:[]
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: PatientData = initialState, action: ActionTypes) => {
    switch (action.type) {
     case GET_PATIENT.GET_PATIENT_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case GET_PATIENT.GET_PATIENT_SUCCESS:
        const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        return {
          ...state,
          isLoading: false,
          contact: allPost
        };

      case GET_PATIENT.GET_PATIENT_ERROR:
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
      
          case GET_DEVICE.GET_DEVICE_INITIALIZATION:
            return {
              ...state,
              isLoading: true
            };
        
          case GET_DEVICE.GET_DEVICE_SUCCESS:
            // const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        // console.log('DEVIXCESSSS', action.payload);
        return {
              ...state,
              isLoading: false,
              devices: action.payload
            };
        
          case GET_DEVICE.GET_DEVICE_ERROR:
            return {
              ...state,
              isLoading: false
            };
      
          case UPDATE_PATIENT.UPDATE_PATIENT_INITIALIZATION:
            return {
              ...state,
              isLoading: true
            };
        
          case UPDATE_PATIENT.UPDATE_PATIENT_SUCCESS:
            const allPostss = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        console.log("UPDATE_PATIENT.UPDATE_PATIENT_SUCCESS", action.payload);
        return {
              ...state,
              isLoading: false,
              // contact: allPostss
            };
        
          case UPDATE_PATIENT.UPDATE_PATIENT_ERROR:
            return {
              ...state,
              isLoading: false
            };
      
            case GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_INITIALIZATION:
              return {
                ...state,
                isLoading: true
              };
          
            case GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_SUCCESS:
              // const allPostss = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        console.log("object", action.payload);
        return {
                ...state,
                isLoading: false,
                diagnosisType: action.payload
              };
          
            case GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_ERROR:
              return {
                ...state,
                isLoading: false
              };

              case GET_VISIT_REASON.GET_VISIT_REASON_INITIALIZATION:
                return {
                  ...state,
                  isLoading: true
                };
            
              case GET_VISIT_REASON.GET_VISIT_REASON_SUCCESS:
                // const allPostss = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
            console.log("object", action.payload);
            return {
                  ...state,
                  isLoading: false,
                  visitReasons: action.payload
                };
            
              case GET_VISIT_REASON.GET_VISIT_REASON_ERROR:
                return {
                  ...state,
                  isLoading: false
                };
            
      
  case GET_APPOINTMENT.GET_APPOINTMENT_INITIALIZATION:
    return {
      ...state,
      isLoading: true
    };

  case GET_APPOINTMENT.GET_APPOINTMENT_SUCCESS:
    // const allPostss = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
console.log("object", action.payload);
return {
      ...state,
      isLoading: false,
      appointments: action.payload
    };

  case GET_APPOINTMENT.GET_APPOINTMENT_ERROR:
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
