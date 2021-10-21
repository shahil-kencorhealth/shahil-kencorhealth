import { apiCall, METHOD } from "../../service/baseApiCall";
import {
  GET_PATIENT, GET_ALERT_COUNT, UPDATE_PATIENT, GET_DEVICE, ADD_MANAGE_DEVICE, DEACTIVATE_PATIENT, SEND_MESSAGE,
  DELETE_PATIENT, GET_DIAGNOSIS_TYPE, ADD_APPOINTMENT,GET_VISIT_REASON,GET_APPOINTMENT
} from "../constants/action-types";
import {
  GET_PATIENT_URL, GET_ALERT_COUNT_URL, UPDATE_PATIENT_URL, GET_PATIENT_DEVICE_URL, ADD_MANAGE_DEVICE_URL
  , DEACTIVATE_PATIENT_URL, SEND_MESSAGE_URL, DELETE_PATIENT_URL, GET_DIAGNOSIS_TYPE_URL,GET_VISIT_REASON_URL,ADD_APPOINTMENT_URL,GET_APPOINTMENT_URL
} from "../../service/apiEndPoints";
import { Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { toast } from "react-toastify";
// import { AxiosResponse } from "axios";

// export type ActionTypes =
//   | { type: typeof GET_PATIENT.GET_PATIENT_INITIALIZATION; payload: Posts[] }
//   | { type: typeof GET_PATIENT.GET_PATIENT_SUCCESS; payload: Posts[] }
//   | { type: typeof GET_PATIENT.GET_PATIENT_ERROR; payload: Posts[] }

export const getContact = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getContactInit());
};
export const getContactInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_PATIENT.GET_PATIENT_INITIALIZATION
  });
  apiCall(
    // "v1/user/contact?role=patient",
    GET_PATIENT_URL,
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
    type: GET_PATIENT.GET_PATIENT_SUCCESS,
    payload: res.userInfos
  });
};

export const getContactError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_PATIENT.GET_PATIENT_ERROR
  });
};


export const updatePatient = (patient:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(updatePatientInit(patient));
};
export const updatePatientInit = (patient:any): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  console.log('IN ACTIONS', patient);
  dispatch({
    type: UPDATE_PATIENT.UPDATE_PATIENT_INITIALIZATION
  });
  apiCall(
     `${UPDATE_PATIENT_URL}${patient.id}`,
    {
      ...patient
    },
    (res: Object) => {
      // console.log("Success", res);
      dispatch(updatePatientSuccess(patient))
    },
    (err:any) => {  dispatch(updatePatientError())},
    METHOD.PUT,
    {}
  );
  // dispatch(updatePatientSuccess());
};

export const updatePatientSuccess = (patient:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  console.log("USER UPODATE PATINETN", patient);
  dispatch({
    type: UPDATE_PATIENT.UPDATE_PATIENT_SUCCESS,
    payload: patient
  });
  dispatch(getContact());
  
  toast.success("User edit successfull");
};

export const updatePatientError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: UPDATE_PATIENT.UPDATE_PATIENT_ERROR
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
    GET_ALERT_COUNT_URL,
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
  // console.log("ALERT COUNT RESOPNSE", res);
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

export const getPatientDevices = (patientID:string): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getPatientDevicesInit(patientID));
};
export const getPatientDevicesInit = (patientID:string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_DEVICE.GET_DEVICE_INITIALIZATION
  });

//  const URL =  GET_PATIENT_DEVICE_URL.replace("patientDevice", "68554273-953d-41c5-b65b-4d2f895f8402");
 const URL =  GET_PATIENT_DEVICE_URL.replace("patientDevice", patientID);
  
  // console.log("GET_URLRLRLR", GET_PATIENT_DEVICE_URL);
  apiCall(
    URL,
    {
    },
    (res: Object) => dispatch(getPatientDevicesSuccess(res)),
    () => dispatch(getPatientDevicesError()),
    METHOD.GET,
    {}
  );
  // dispatch(getPatientDevicesSuccess());
};

export const getPatientDevicesSuccess = (res: any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  // console.log("ALERT COUNT RESOPNSE", res);
  dispatch({
    type: GET_DEVICE.GET_DEVICE_SUCCESS,
    payload: res.data
  });
};

export const getPatientDevicesError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_DEVICE.GET_DEVICE_ERROR
  });
};

export const addManageDevice = (device:any,id:string): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(addManageDeviceInit(device,id));
};
export const addManageDeviceInit = (device:any,id:string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: ADD_MANAGE_DEVICE.ADD_MANAGE_DEVICE_INITIALIZATION
  });

 const URLS =  ADD_MANAGE_DEVICE_URL.replace("patientDevice", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    URLS,
   device,
    (res: Object) => dispatch(addManageDeviceSuccess(res)),
    () => dispatch(addManageDeviceError()),
    METHOD.PUT,
    {}
  );
  // dispatch(addManageDeviceSuccess());
};

export const addManageDeviceSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: ADD_MANAGE_DEVICE.ADD_MANAGE_DEVICE_SUCCESS,
    payload: res.userInfos
  });
};

export const addManageDeviceError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: ADD_MANAGE_DEVICE.ADD_MANAGE_DEVICE_ERROR
  });
};


export const deactivatePatient = (id:string,status:string): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(deactivatePatientInit(id,status));
};

export const deactivatePatientInit = (id: string, status: string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: DEACTIVATE_PATIENT.DEACTIVATE_PATIENT_INITIALIZATION
  });

  apiCall(
    DEACTIVATE_PATIENT_URL,
    {
      patientId:id,
      state: status
    },
    (res: Object) => { console.log("dispatch deactivation", res); dispatch(deactivatePatientSuccess(res))},
    () => dispatch(deactivatePatientError()),
    METHOD.POST,
    {}
  );
  // dispatch(deactivatePatientSuccess());
};

export const deactivatePatientSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: DEACTIVATE_PATIENT.DEACTIVATE_PATIENT_SUCCESS,
    payload: res.userInfos
  });
};

export const deactivatePatientError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: DEACTIVATE_PATIENT.DEACTIVATE_PATIENT_ERROR
  });
};


export const sendMessage = (message:any,id:string): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(sendMessageInit(message,id));
};
export const sendMessageInit = (message:any,id:string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: SEND_MESSAGE.SEND_MESSAGE_INITIALIZATION
  });
  const MESSAGE_URL = SEND_MESSAGE_URL.replace("patientID", id);
  console.log("MESSAGE_URL", MESSAGE_URL);
  apiCall(
    // "v1/user/contact?role=patient",
    MESSAGE_URL,
   {message: message},
    (res: Object) => { console.log("object RES", res); dispatch(sendMessageSuccess(res))},
    () => dispatch(sendMessageError()),
    METHOD.PUT,
    {}
  );
  // dispatch(sendMessageSuccess());
};

export const sendMessageSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: SEND_MESSAGE.SEND_MESSAGE_SUCCESS,
    payload: res.userInfos
  });
  toast.success(
    'message sent successfully'
  )
};

export const sendMessageError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: SEND_MESSAGE.SEND_MESSAGE_ERROR
  });
};



export const deletePatient = (id:string): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(deletePatientInit(id));
};
export const deletePatientInit = (id:string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: DELETE_PATIENT.DELETE_PATIENT_INITIALIZATION
  });

//  const URLS =  DELETE_PATIENT_URL.replace("patientDevice", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    DELETE_PATIENT_URL  + id, {},
    (res: Object) => dispatch(deletePatientSuccess(res)),
    () => dispatch(deletePatientError()),
    METHOD.DELETE,
    {}
  );
  // dispatch(deletePatientSuccess());
};

export const deletePatientSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: DELETE_PATIENT.DELETE_PATIENT_SUCCESS,
  });
  toast.success('Delete SuceessFull');
};

export const deletePatientError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: DELETE_PATIENT.DELETE_PATIENT_ERROR
  });
};

export const getDiagnosisType = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getDiagnosisTypeInit());
};
export const getDiagnosisTypeInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_INITIALIZATION
  });

//  const URLS =  GET_DIAGNOSIS_TYPE_URL.replace("patientDevice", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    GET_DIAGNOSIS_TYPE_URL , {},
    (res: Object) => { console.log("Res", res); dispatch(getDiagnosisTypeSuccess(res))},
    () => dispatch(getDiagnosisTypeError()),
    METHOD.GET,
    {}
  );
  // dispatch(getDiagnosisTypeSuccess());
};

export const getDiagnosisTypeSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_SUCCESS,
    payload:res
  });
  // toast.success('Delete SuceessFull');
};

export const getDiagnosisTypeError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_DIAGNOSIS_TYPE.GET_DIAGNOSIS_TYPE_ERROR
  });
};


export const addAppointments = (appointment:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(addAppointmentInit(appointment));
};
export const addAppointmentInit = (appointment:any): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: ADD_APPOINTMENT.ADD_APPOINTMENT_INITIALIZATION
  });

//  const URLS =  ADD_APPOINTMENT_URL.replace("patientDevice", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    ADD_APPOINTMENT_URL , {...appointment},
    (res: Object) => { console.log("Res", res); dispatch(addAppointmentSuccess(res,appointment.id))},
    () => dispatch(addAppointmentError()),
    METHOD.POST,
    {}
  );
  toast.success("Appointment added successfully")
  // dispatch(addAppointmentSuccess());
};

export const addAppointmentSuccess = (res:any,id:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: ADD_APPOINTMENT.ADD_APPOINTMENT_SUCCESS,
    payload:res
  });
  dispatch(getAppointments(id));

  toast.success('Appointment added SuceessFully');
};

export const addAppointmentError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: ADD_APPOINTMENT.ADD_APPOINTMENT_ERROR
  });
};

export const getVisitReason = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getVisitReasonInit());
};
export const getVisitReasonInit = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_VISIT_REASON.GET_VISIT_REASON_INITIALIZATION
  });

//  const URLS =  GET_VISIT_REASON_URL.replace("patientDevice", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    GET_VISIT_REASON_URL , {},
    (res: Object) => { console.log("Res", res); dispatch(getVisitReasonSuccess(res))},
    () => dispatch(getVisitReasonError()),
    METHOD.GET,
    {}
  );
  // dispatch(getVisitReasonSuccess());
};

export const getVisitReasonSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_VISIT_REASON.GET_VISIT_REASON_SUCCESS,
    payload:res.data
  });
  // toast.success('Delete SuceessFull');
};

export const getVisitReasonError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_VISIT_REASON.GET_VISIT_REASON_ERROR
  });
};


export const getAppointments = (id:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(getAppointmentInit(id));
};
export const getAppointmentInit = (id:any): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  dispatch({
    type: GET_APPOINTMENT.GET_APPOINTMENT_INITIALIZATION
  });

 const UR =  GET_APPOINTMENT_URL.replace("ID", id);
  // const aa = [{ id: "67f8bf1e-bccf-406d-b491-25b3a4761af9", status: "allocated" }];
  apiCall(
    // "v1/user/contact?role=patient",
    UR , {},
    (res: Object) => { console.log("Res", res); dispatch(getAppointmentSuccess(res))},
    () => dispatch(getAppointmentError()),
    METHOD.GET,
    {}
  );
  // dispatch(getAppointmentSuccess());
};

export const getAppointmentSuccess = (res:any): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  console.log("ACTIONs APPOINT", res);
  dispatch({
    type: GET_APPOINTMENT.GET_APPOINTMENT_SUCCESS,
    payload:res
  });
  // toast.success('Delete SuceessFull');
};

export const getAppointmentError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: GET_APPOINTMENT.GET_APPOINTMENT_ERROR
  });
};