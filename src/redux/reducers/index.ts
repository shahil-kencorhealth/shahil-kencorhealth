import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import patientReducer from "./patientReducer";

// Combine all reducers as root reducer
export default combineReducers({
  userDataReducer,
  patientReducer
});
