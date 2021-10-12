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
    alertCount:any
  }

export interface Store {
    userDataReducer:UserData
    patientReducer:PatientData
}

export interface Posts {
    id: number,
    body: String,
    title: String,
    userId:number
}
