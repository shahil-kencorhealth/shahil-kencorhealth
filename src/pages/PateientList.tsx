import React, { useEffect, useState } from "react";
import { EditPatient } from "./Modals/EditPatient";
import { useDispatch, useSelector } from "react-redux";
import { AddAppointment } from "./Modals/AddAppointment";
import { DeleteUser } from "./Modals/DeleteUser";
import { ManageDevices } from "./Modals/ManageDevices";
import { Store } from "../redux/Actions";
import { getAlertCount, getContact } from "../redux/action";
import { Spinner } from "reactstrap";

export interface Posts {
  id: number,
  fname: String,
  lname: String,
  mobile: String,
  appointmentTime: String,
  lastVisit:String
}
const MODAL_TYPE= {
  EDIT_PATIENT: 1,
  DELETE_USER: 2,
  ADD_APPOINTMENT: 3,
  MANAGE_DEVICE:4
}

export default function PateientList() {
  const initialState: Posts[] = [];
  const [post, setpost] = useState(initialState);
  // const [selectedPost, setSelectedPost] = useState({ id: 0, title: "", body: "" });
  const patientList = useSelector((state: Store) => state.patientReducer.contact);
  const alertCount = useSelector((state: Store) => state.patientReducer.alertCount);
  const loading = useSelector((state: Store) => state.patientReducer.isLoading);

  const [editPatient, seteditPatient] = useState(false)
  const [deleteUser, setdeleteUser] = useState(false)
  const [addAppointment, setaddAppointment] = useState(false)
  const [manageDevice, setmanageDevice] = useState(false)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContact());
    dispatch(getAlertCount());
  }, [])

  useEffect(() => {
    console.log("patient List", patientList);
    const items:Posts[] = [];
    for (let i = 0; i < 5;i++) {
      // console.log("KEY VALUE", { key, value });

      items.push({
        id: i,
        fname: 'Jhon'+ i,
        lname: 'ANC '+ i,
        mobile: '98745632'+ i,
        appointmentTime: '12 sept 2019' + i + 'PM',
        lastVisit:'12 sept 2019' + i + 'PM'
      });
    }
    setpost(items);
    console.log(items);
  }, [patientList]);

  const selectChange = (e: number) => {
    if (MODAL_TYPE.EDIT_PATIENT === e)
      seteditPatient(true);
    else if (MODAL_TYPE.DELETE_USER === e)
      setdeleteUser(true);
    else if (MODAL_TYPE.ADD_APPOINTMENT === e)
      setaddAppointment(true);
    else if (MODAL_TYPE.MANAGE_DEVICE === e)
      setmanageDevice(true);
  };

  return (
    <div className="">
      <div className="app d-flex flex-column">
        <div className="content">
          <div className="page-wrapper">
            <div className="page-header border-bottom">
              <div className="container">
                <div className="profile-container d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src="img/avatar.png" alt="Avatar" />
                  </div>
                  <div className="flex-grow-1 ms-3 text-dark">
                    <h1 className="h3 m-0">Welcome</h1>
                    <p className="fs-5 fw-light m-0">Munawar PV</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="container">
                <div className="tabs-custom">
                  <div className="tabs-header">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true" href="#Patient">Patient</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Appointments">Appointments</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Billing">Billing</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" href="#Messages">Messages</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade active show"role="tabpanel" id="Patient">
                    {loading &&   <div style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
   ><Spinner><span></span></Spinner> </div>}
                    <div  style={{ opacity: loading ? '0.3' : '1' }} >
                      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h4 className="m-0">Today <span className="text-success">October 7, 2021</span></h4>
                        <button type="button" className="btn btn-primary-theme mt-3 mt-md-0">List All Patient</button>
                      </div>
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 stats">
                        <div className="col mb-3 mb-md-0">
                          <a className="stat-box red">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <div className="indicator"></div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <div className="single-stat">
                                  <div className="stat-type mb-1">RED</div>
                                  <h4 className="text-dark fw-bold mb-1">{alertCount.newRed} <span className="fw-normal">New </span></h4>
                                  <h4 className="text-dark fw-bold m-0">{alertCount.totalRed} <span className="fw-normal">Total </span></h4>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col mb-3 mb-md-0">
                          <a className="stat-box yellow">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <div className="indicator"></div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <div className="single-stat">
                                  <div className="stat-type mb-1">YELLOW</div>
                                  <h4 className="text-dark fw-bold mb-1">{alertCount.newYellow} <span className="fw-normal">New </span></h4>
                                  <h4 className="text-dark fw-bold m-0">{alertCount.totalYellow} <span className="fw-normal">Total </span></h4>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col mb-3 mb-md-0">
                          <a className="stat-box green">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <div className="indicator"></div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <div className="single-stat">
                                  <div className="stat-type mb-1">ALL CLEAR</div>
                                  <h4 className="text-dark fw-bold mb-1">{alertCount.newGreen} <span className="fw-normal">New </span></h4>
                                  <h4 className="text-dark fw-bold m-0">{alertCount.totalGreen} <span className="fw-normal">Total </span></h4>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col mb-3 mb-md-0">
                          <a className="stat-box gray">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <div className="indicator"></div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <div className="single-stat">
                                  <div className="stat-type mb-1">NON-COMPLIANT</div>
                                  <h4 className="text-dark fw-bold mb-1">{alertCount.newOrange} <span className="fw-normal">New </span></h4>
                                  <h4 className="text-dark fw-bold m-0">{alertCount.totalOrange}<span className="fw-normal">Total </span></h4>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="row my-4 pt-2">
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search for a Patient" />
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">

                        <table className="table table-hover m-0">
                          <thead className="table-light">
                            <tr>
                              <th></th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Phone</th>
                              <th>Appointment Time</th>
                              <th>Last Visit</th>
                              <th>Alert Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {console.log("POSTS", patientList)}
                            {patientList && Object.values(patientList).map(i => (
                              <tr>
                                <td>
                                  <img src="img/user.svg" className="user-icon" alt="User Icon" />
                                </td>
                                <td>{i.fullName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.mobileNumber}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>
                                  {console.log("Fname :"+i.firstName+' ALERT LEVEL: '+i.alertLevel)}
                                  {i.alertLevel === undefined && <div className="status green"></div>}
                                  {i.alertLevel === 'yellow' && <div className="status yellow"></div>}
                                  {i.alertLevel === 'yellow_monitor' && <img src="img/yellow-border.png" height="20" width="20" alt="Yellow Icon"/>}
                                  {i.alertLevel === 'red' && <div className="status red"></div>}
                                  {i.alertLevel === 'green' && <img src="img/samicare.png" height="20" width="20" alt="Yellow Icon"/>}
                                  {i.alertLevel === 'orange' && <div className="status orange"></div>}
                                  {/* <!-- <img src="../assets/img/yellow.png" height="20" width="20" alt="Yellow Icon"> --> */}
                                </td>
                                <td className="max-w-160">
                                  <select className="form-select" onChange={(e) => selectChange(parseInt(e.target.value))}>
                                    <option value="ac">Action</option>
                                    <option value="3">Add Appointment</option>
                                    <option value="1">Edit User</option>
                                    <option value="2">Delete User</option>
                                    <option value="addAppointment">Pre-Call Test</option>
                                    <option value="4">Add/Manage Devices</option>
                                    <option value="addAppointment">De-Activate</option>
                                    <option value="addAppointment">Reset Password</option>
                                    <option value="addAppointment">Send Message</option>
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" role="tabpanel" id="Appointments">

                    </div>
                    <div className="tab-pane fade" role="tabpanel" id="Billing">

                    </div>
                    <div className="tab-pane fade" role="tabpanel" id="Messages">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log("editPatient", editPatient)}
      {editPatient && (
        <>
          <EditPatient />
        </>
      )}

      {addAppointment && (
        <>
          <AddAppointment />
        </>
      )}
      
      {deleteUser && (
        <>
          <DeleteUser />
        </>
      )}
      
      {manageDevice && (
        <>
          <ManageDevices />
        </>
      )}
    </div>
  );
}
