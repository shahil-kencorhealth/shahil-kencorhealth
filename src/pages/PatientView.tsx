
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import Calender from "../components/PatientView/Calender";
import Notes from "../components/PatientView/Notes";
import PatientPro from "../components/PatientView/PatientPro";
import Vitals from "../components/PatientView/Vitals";
import { getPatientView } from "../redux/action";
import { PatientData, Store } from "../redux/Actions";
import { AddNotes } from "./Modals/AddNotes";
import { AddVitals } from "./Modals/AddVital";
import { AddVitalComments } from "./Modals/AddVitalComment";
import { PatientViewModel } from "./Modals/PatienViewModel";
import Footer from "../components/Footer";
export default function PatientView(props:any){
    const location=useLocation()
    const [patientData,setPatientData]=useState<any>({})
    console.log(props.history.location.state)
    const {id,mobileNumber}=props.history.location.state
    const patient=useSelector((state:Store)=>{return state.patientViewReducer.patient})

   const dispatch=useDispatch()
   useEffect(()=>{
       if(props.history.location.state){
       dispatch(getPatientView(id))}
   },[])
   useEffect(()=>{
    if(patient){
        setPatientData(patient)
    }
},[patient])
console.log(patientData)
   

   return( <div className="content">
    <div className="page-wrapper">
        <div className="container">
            <div className="page-header border-bottom">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="profile-container d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="img/avatar.png" className="profile-img" alt="Avatar"/>
                                </div>
                                <div className="flex-grow-1 ms-3 text-dark">
                                    <h1 className="h3 fw-light mb-1">{patientData.patientName} 
                                        <a href="javascript:;" className="ms-1" data-bs-toggle="modal" data-bs-target="#PatientView">
                                            <i className="zmdi zmdi-info"></i>
                                        </a>
                                    </h1>
                                    <p className="fw-bold m-0">{mobileNumber}</p>
                                    <small className="fw-bold d-block m-0">MRN: Test</small>
                                    <small className="fw-light">Last visit: 
                                    {new Date(
                               patientData.lastLoginDate
                              ).toLocaleDateString("en-US")}
                                  </small>
                                </div>
                            </div>
                            <div className="action-buttons-container ms-5">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item me-3">
                                        <a href="javascript:;" className="action-button chat">
                                            <i className="zmdi zmdi-comment-more zmdi-hc-2x"></i>
                                        </a>
                                        <p className="font-size-14 text-center m-0"><small>Chat</small></p>
                                    </li>
                                    <li className="list-inline-item me-3">
                                        <a href="javascript:;" className="action-button audio">
                                            <i className="zmdi zmdi-phone zmdi-hc-2x"></i>
                                        </a>
                                        <p className="font-size-14 text-center m-0"><small>Audio Call</small></p>
                                    </li>
                                    <li className="list-inline-item me-3">
                                        <a href="javascript:;" className="action-button video">
                                            <i className="zmdi zmdi-videocam zmdi-hc-2x"></i>
                                        </a>
                                        <p className="font-size-14 text-center m-0"><small>Video Call</small></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-end">
                        <ul className="list-inline m-0 d-flex justify-content-end m-0">
                            <li className="list-inline-item me-4">
                                <div className="text-center">
                                    <img src="img/yellow.png" className="mb-1" height="25" width="25" alt="Yellow Icon"/>
                                    <p className="font-size-14 text-center m-0"><small>New</small></p>
                                </div>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="javascript:;" className="d-block text-center">
                                    <i className="zmdi zmdi-home zmdi-hc-2x font-size-29 d-block"></i>
                                    <p className="font-size-14 text-center m-0"><small>Home</small></p>
                                </a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#Authorize" className="d-block text-center">
                                    <i className="zmdi zmdi-check-circle zmdi-hc-2x font-size-29 d-block"></i>
                                    <p className="font-size-14 text-center m-0"><small>Authorize</small></p>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <select className="form-select">
                                    <option>Change State</option>
                                    <option>Mark as Red</option>
                                    <option>Mark as Yellow</option>
                                    <option>Mark as Green</option>
                                    <option>Mark as Grey</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="tabs-custom">
                    <div className="tabs-header">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true" href="#Dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Notes">Notes</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Pro">Pro</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Vitals">Vitals</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Careplan">Careplan</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Timeline">Timeline</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Billing">Billing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" role="tabpanel" id="Dashboard">
                         <Calender id={id}/>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="Notes">
                         <Notes/>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="Pro">
                           <PatientPro/>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="Vitals">
                          <Vitals/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
         <PatientViewModel/>
          <AddNotes/>
          <AddVitals/>
          <AddVitalComments/>
   
</div>


)
}