export interface UserData {
    progress: boolean,
    isLoading: boolean,
    isRegisterd: boolean,
    authToken: String,
    isLoggedin:boolean,
    isForgotpasswordSuccess: boolean,
    user: Object,
    posts: Object
}

export interface PatientData {
    progress: boolean,
    isLoading: boolean,
    contact: Object,
    devices: Object,
  alertCount: any,
  diagnosisType: Object,
  visitReasons: Object,
  appointments:Object
}

export interface PatientViewData{
  progress: boolean,
  isLoading: boolean,
  isCalenderLoading:boolean,
  data:any,
  patient:object
}

export interface PhysicianData {
  progress: boolean,
  isLoading: boolean,
  physicianList:any
}

export interface Store {
  userDataReducer:UserData
  patientReducer: PatientData
  physicianReducer:PhysicianData
  patientViewReducer:PatientViewData
}

export interface Posts {
    id: number,
    body: String,
    title: String,
    userId:number
}
