import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import patientReducer from "./patientReducer";
import physicianReducer from "./physicianReducer";
import patientViewReducer from './patientViewReducer'

// Combine all reducers as root reducer
export default combineReducers({
  userDataReducer,
  patientReducer,
  physicianReducer,patientViewReducer
});
