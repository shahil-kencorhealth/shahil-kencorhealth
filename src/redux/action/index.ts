import { LOGIN, REGISTER, FORGOT_PASSWORD, GET_POSTS, UPDATE_POSTS, DELETE_POSTS, ADD_POSTS, GET_PATIENT,GET_ALERT_COUNT, PATIENT_DASHBOARD, PATIENT_VIEW} from "../constants/action-types";
import { PatientViewData, Posts, Store, UserData } from "../Actions";

export * from "./userActions";
export * from "./patientActions";
export * from "./physicianActions";
export * from "./patientView"


export type ActionTypes =
  | { type: typeof LOGIN.LOGIN_INITLIZATION; payload: UserData[] }
  | { type: typeof LOGIN.LOGIN_SUCCESS; payload: UserData[] }
  | { type: typeof LOGIN.LOGIN_ERORR; payload: UserData[] }
  | { type: typeof REGISTER.REGISTER_INITLIZATION; payload: Object }
  | { type: typeof REGISTER.REGISTER_SUCCESS; payload: Object }
  | { type: typeof REGISTER.REGISTER_ERORR; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR; payload: Object }
  | { type: typeof GET_POSTS.GET_POSTS_INITIALIZATION; payload: Posts[] }
  | { type: typeof GET_POSTS.GET_POSTS_SUCCESS; payload: Posts[] }
  | { type: typeof GET_POSTS.GET_POSTS_ERROR; payload: Posts[] }
  | { type: typeof ADD_POSTS.ADD_POSTS_INITIALIZATION; payload: Posts[] }
  | { type: typeof ADD_POSTS.ADD_POSTS_SUCCESS; payload: Posts[] }
  | { type: typeof ADD_POSTS.ADD_POSTS_ERROR; payload: Posts[] }
  | { type: typeof UPDATE_POSTS.UPDATE_POSTS_INITIALIZATION; payload: {id:number, post:Posts} }
  | { type: typeof UPDATE_POSTS.UPDATE_POSTS_SUCCESS; payload: { id:number, post:Posts} }
  | { type: typeof UPDATE_POSTS.UPDATE_POSTS_ERROR; payload: {id:number, post:Posts} }
  | { type: typeof DELETE_POSTS.DELETE_POSTS_INITIALIZATION; payload: Posts[] }
  | { type: typeof DELETE_POSTS.DELETE_POSTS_SUCCESS; payload: Posts[] }
  | { type: typeof DELETE_POSTS.DELETE_POSTS_ERROR; payload: Posts[] }
  | { type: typeof GET_PATIENT.GET_PATIENT_INITIALIZATION; payload: Posts[] }
  | { type: typeof GET_PATIENT.GET_PATIENT_SUCCESS; payload: Posts[] }
  | { type: typeof GET_PATIENT.GET_PATIENT_ERROR; payload: Posts[] }
  | { type: typeof GET_ALERT_COUNT.GET_ALERT_COUNT_INITIALIZATION; payload: Posts[] }
  | { type: typeof GET_ALERT_COUNT.GET_ALERT_COUNT_SUCCESS; payload: Posts[] }
  | { type: typeof GET_ALERT_COUNT.GET_ALERT_COUNT_ERROR; payload: Posts[] }
  | { type: typeof PATIENT_DASHBOARD.PATIENT_DASHBOARD_INITIALIZATION; payload: PatientViewData[] }
  | { type: typeof PATIENT_DASHBOARD.PATIENT_DASHBOARD_SUCCESS; payload: PatientViewData[] }
  | { type: typeof PATIENT_DASHBOARD.PATIENT_DASHBOARD_ERROR; payload: PatientViewData[] }
  | { type: typeof PATIENT_VIEW.PATIENT_VIEW_INITIALIZATION; payload: PatientViewData }
  | { type: typeof PATIENT_VIEW.PATIENT_VIEW_SUCCESS; payload: PatientViewData }
  | { type: typeof PATIENT_VIEW.PATIENT_VIEW_ERROR; payload: PatientViewData }

