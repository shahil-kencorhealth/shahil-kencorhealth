import React, { useEffect, useState } from "react";
import { EditPatient } from "./Modals/EditPatient";
import { useDispatch, useSelector } from "react-redux";
import { AddAppointment } from "./Modals/AddAppointment";
import { DeleteUser } from "./Modals/DeleteUser";
import { ManageDevices } from "./Modals/ManageDevices";
import { Store } from "../redux/Actions";
import { deactivatePatient, getAlertCount, getContact, getDiagnosisType,  getPatientView, getPhysicians } from "../redux/action";
import { Spinner } from "reactstrap";
import Appointment from "../components/HomePatient/Appointment";
import Billing from "../components/HomePatient/Billing";
import Message from "../components/HomePatient/Message";
import Autosuggest from "react-autosuggest";
import { useHistory } from "react-router";
import "./suggestion.css";

export interface Patient {
  id: number;
  fullName: string;
  lastName: string;
  firstName: string;
  mobileNumber: string;
  alertLevel: string;
  lastVisit: string;
}
const MODAL_TYPE = {
  EDIT_PATIENT: 1,
  DELETE_USER: 2,
  ADD_APPOINTMENT: 3,
  MANAGE_DEVICE: 4,
};

// const ALERT_TYPE= {
//   RED: 1,
//   YELLOW: 2,
//   YELLOW_MONITOR: 3,
//   GREEN: 4,
//   ORANGE:5,
//   UNDEFINED: 6,

// }

const ALERT_TYPE: any = {
  1: "red",
  2: "yellow",
  3: "yellow_monitor",
  4: "green",
  5: "orange",
  6: undefined,
  7: "all",
};

export default function PateientList(props: any) {
  const initialState: Patient[] = [];
  // const initialStates: any[] = [];
  const history = useHistory();
  const [post, setpost] = useState(initialState);
  // const [selectedPost, setSelectedPost] = useState({ id: 0, title: "", body: "" });
  const patientList = useSelector(
    (state: Store) => state.patientReducer.contact
  );
  const alertCount = useSelector(
    (state: Store) => state.patientReducer.alertCount
  );
  const loading = useSelector((state: Store) => state.patientReducer.isLoading);
  const diagnosisType = useSelector((state: Store) => state.patientReducer.diagnosisType);
  const [filteredPatients, setFilteredPatients] = useState(initialState);
  const [editPatient, seteditPatient] = useState(false);
  const [deleteUser, setdeleteUser] = useState(false);
  const [addAppointment, setaddAppointment] = useState(false);
  const [manageDevice, setmanageDevice] = useState(false);
  const [searchedList, setSearchedList] = useState(initialState);
  const [searchedText, setSearchedText] = useState("");
  const [editSelectedPatient, setEditSelectedPatient] = useState([]);
  const [selectManageDevice, setSelectManageDevice] = useState([]);
  const [selectAction, setSelectAction] = useState("");
  const [diagnosisTypeSelect, setDiagnosisTypeSelect] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
    dispatch(getAlertCount());
    dispatch(getPhysicians());
    dispatch(getDiagnosisType());
    
  }, []);

  useEffect(() => {
    if (patientList) {
      setFilteredPatients(Object.values(patientList));
    }
  }, [patientList]);

  useEffect(() => {
    if (Object.values(diagnosisType).length > 0) {
      const ds:any= [];
      console.log("Object.values(diagnosisType)", Object.values(diagnosisType));
      Object.values(diagnosisType)[0].map((i:any) => {
        ds.push({ label: i });
      })

      Object.values(diagnosisType)[1].map((i:any,index:any) => {
        ds[index].value = i;
      })
      console.log("object ds ds", ds);
      // setFilteredPatients(Object.values(patientList));
      setDiagnosisTypeSelect(ds);
    }
  }, [diagnosisType]);

  
  useEffect(() => {
    // console.log("SET");
    console.log("SET");
  }, [filteredPatients, searchedList]);

  const sortList = (property: Patient[]) => {
    // setFilteredPatients(prv => [...prv, property]);
    setFilteredPatients([...property]);
    // setMyArray(oldArray => [...oldArray, newElement]);

    console.log("All Filtered", filteredPatients);
    // patients.sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0))
  };

  const alertStatusSelected = (alertN: any) => {
    console.log("ALERT N", alertN);
    console.log("ALERT N Value", ALERT_TYPE[alertN]);
    const selectedStatus = ALERT_TYPE[alertN];
    if (selectedStatus == "all") {
      setFilteredPatients(Object.values(patientList));
    } else {
      const alertItems: any = [];
      Object.values(patientList).map((item) => {
        if (item.alertLevel === selectedStatus) {
          alertItems.push(item);
        }
      });
      console.log("alertItems", alertItems);
      setFilteredPatients(alertItems);
    }
  };

  const searchText = (text: string) => {
    if (text.trim().length <= 0) {
      setSearchedList([]);
      setSearchedText("");
    } else {
      setSearchedText(text);
      const filters = filteredPatients;
      const searchedText: any = [];
      filters.map((i) => {
        if (
          i.fullName.toLowerCase().indexOf(text.toLowerCase()) >= 0
          // || i.lastName.toLowerCase().indexOf(text.toLowerCase()) >= 0
          // || i.mobileNumber.toLowerCase().indexOf(text.toLowerCase()) >= 0
        ) {
          searchedText.push(i);
        }
      });
      console.log("SEarched Text", searchedText);
      setSearchedList([...searchedText]);
      console.log("SEarched Text From List", searchedList);
      return searchedText;
    }
  };

  const getSuggestionValue = (suggestion: any) => suggestion.fullName;

  const renderSuggestion = (suggestion: any) => (
    <div>{suggestion.fullName}</div>
  );

  const onChange = (event: any, { newValue }: any) => {
    setSearchedText(newValue);
  };

  const selectChange = (e: number, user: any) => {
    console.log("USER EDIT", user);
    if (MODAL_TYPE.EDIT_PATIENT === e) {
      seteditPatient(true);
      setEditSelectedPatient(user);
    } else if (MODAL_TYPE.DELETE_USER === e) {
      setdeleteUser(true);
    } else if (MODAL_TYPE.ADD_APPOINTMENT === e) {
      setEditSelectedPatient(user);
      setaddAppointment(true);
    } else if (MODAL_TYPE.MANAGE_DEVICE === e) {
      console.log("object ON ADD DEVICES", e);
      setSelectManageDevice(user);
      setmanageDevice(true);
    }
    setSelectAction('ac');
  };

  const value = searchedText;
  // const suggestions = searchedList;

  // const inputProps = {
  //   placeholder: 'Type a programming language',
  //   value: searchText,
  //   onChange: onChange
  // };
  console.log("editPatient", editPatient);

  return (
    <div className="">
      <div className="app d-flex flex-column">
        <div className="content">
          <div className="page-wrapper">
            <div className="container">
              {/* <div className="page-header border-bottom">
                <div className="profile-container d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src="img/avatar.png" alt="Avatar" />
                  </div>
                  <div className="flex-grow-1 ms-3 text-dark">
                    <h1 className="h3 m-0">Welcome</h1>
                    <p className="fs-5 fw-light m-0">Munawar PV</p>
                  </div>
                </div>
              </div> */}
              <div className="page-content mt-2">
                <div className="tabs-custom">
                  <div className="tabs-header">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#Patient"
                        >
                          Patient
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected="false"
                          href="#Appointments"
                        >
                          Appointments
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected="false"
                          href="#Billing"
                        >
                          Billing
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected="false"
                          href="#Messages"
                        >
                          Messages
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      role="tabpanel"
                      id="Patient"
                    >
                      {loading && (
                        <div
                          style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Spinner>
                            <span></span>
                          </Spinner>{" "}
                        </div>
                      )}
                      <div style={{ opacity: loading ? "0.3" : "1" }}>
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 pb-1">
                          <h4 className="m-0">
                            Today{" "}
                            <span className="text-success">
                              October 7, 2021
                            </span>
                          </h4>
                          <div className="ms-auto d-flex flex-wrap align-items-center">
                            <div className="form-group min-w-250 mt-3 mt-md-0 me-3">
                              <Autosuggest
                                suggestions={searchedList}
                                onSuggestionsFetchRequested={({ value }) => {
                                  setSearchedText(value);
                                  searchText(value);
                                  // setSearchedList(getSuggestionValue(value));
                                }}
                                onSuggestionsClearRequested={() => {
                                  setSearchedList([]);
                                }}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={{
                                  placeholder: "Search for a patient'",
                                  className: "form-control",
                                  value: value,
                                  onChange: (_, { newValue, method }) => {
                                    console.log("HEELO ON CHANGE", newValue);
                                    setSearchedText(newValue);
                                  },
                                }}
                              />
                            </div>
                            <button
                              type="button"
                              className="btn btn-primary-theme mt-3 mt-md-0"
                              onClick={() => alertStatusSelected(7)}
                            >
                              List All Patient
                            </button>
                          </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 stats">
                          <div className="col mb-3 mb-md-0">
                            <a className="stat-box red">
                              <div
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => alertStatusSelected(1)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="indicator"></div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <div className="single-stat">
                                    <div className="stat-type mb-1">RED</div>
                                    <h4 className="text-dark fw-bold mb-1">
                                      {alertCount.newRed}{" "}
                                      <span className="fw-normal">New </span>
                                    </h4>
                                    <h4 className="text-dark fw-bold m-0">
                                      {alertCount.totalRed}{" "}
                                      <span className="fw-normal">Total </span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="col mb-3 mb-md-0"
                            style={{ cursor: "pointer" }}
                          >
                            <a className="stat-box yellow">
                              <div
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => alertStatusSelected(3)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="indicator"></div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <div className="single-stat">
                                    <div className="stat-type mb-1">YELLOW</div>
                                    <h4 className="text-dark fw-bold mb-1">
                                      {alertCount.newYellow}{" "}
                                      <span className="fw-normal">New </span>
                                    </h4>
                                    <h4 className="text-dark fw-bold m-0">
                                      {alertCount.totalYellow}{" "}
                                      <span className="fw-normal">Total </span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col mb-3 mb-md-0">
                            <a className="stat-box green">
                              <div
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => alertStatusSelected(4)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="indicator"></div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <div className="single-stat">
                                    <div className="stat-type mb-1">
                                      ALL CLEAR
                                    </div>
                                    <h4 className="text-dark fw-bold mb-1">
                                      {alertCount.newGreen}{" "}
                                      <span className="fw-normal">New </span>
                                    </h4>
                                    <h4 className="text-dark fw-bold m-0">
                                      {alertCount.totalGreen}{" "}
                                      <span className="fw-normal">Total </span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col mb-3 mb-md-0">
                            <a className="stat-box gray">
                              <div
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => alertStatusSelected(5)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="indicator"></div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <div className="single-stat">
                                    <div className="stat-type mb-1">
                                      NON-COMPLIANT
                                    </div>
                                    <h4 className="text-dark fw-bold mb-1">
                                      {alertCount.newOrange}{" "}
                                      <span className="fw-normal">New </span>
                                    </h4>
                                    <h4 className="text-dark fw-bold m-0">
                                      {alertCount.totalOrange}
                                      <span className="fw-normal">Total </span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row my-4 pt-2">
                          <div className="table-responsive">
                            <table className="table table-hover m-0">
                              <thead className="table-light">
                                <tr>
                                  <th></th>
                                  <th
                                    onClick={() => {
                                      const arr = filteredPatients.sort(
                                        (a, b) =>
                                          a.fullName > b.fullName
                                            ? 1
                                            : b.fullName > a.fullName
                                            ? -1
                                            : 0
                                      );
                                      // console.log("Sorted", arr);
                                      // setFilteredPatients(arr);
                                      sortList(arr);
                                    }}
                                  >
                                    First Name
                                  </th>
                                  <th
                                    onClick={() => {
                                      const arr = filteredPatients.sort(
                                        (a, b) =>
                                          a.lastName > b.lastName
                                            ? 1
                                            : b.lastName > a.lastName
                                            ? -1
                                            : 0
                                      );

                                      sortList(arr);
                                    }}
                                  >
                                    Last Name
                                  </th>
                                  <th
                                    onClick={() => {
                                      const arr = filteredPatients.sort(
                                        (a, b) =>
                                          a.mobileNumber > b.mobileNumber
                                            ? 1
                                            : b.mobileNumber > a.mobileNumber
                                            ? -1
                                            : 0
                                      );

                                      sortList(arr);
                                    }}
                                  >
                                    Phone
                                  </th>
                                  <th
                                    onClick={() => {
                                      const arr = filteredPatients.sort(
                                        (a, b) =>
                                          a.fullName > b.fullName
                                            ? 1
                                            : b.fullName > a.fullName
                                            ? -1
                                            : 0
                                      );
                                      sortList(arr);
                                    }}
                                  >
                                    Appointment Time
                                  </th>
                                  <th>Last Visit</th>
                                  <th
                                    onClick={() => {
                                      const arr = filteredPatients.sort(
                                        (a, b) =>
                                          a.alertLevel > b.alertLevel
                                            ? 1
                                            : b.alertLevel > a.alertLevel
                                            ? -1
                                            : 0
                                      );
                                      sortList(arr);
                                    }}
                                  >
                                    Alert Status
                                  </th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredPatients &&
                                  filteredPatients.map((i) => (
                                    <tr>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        <img
                                          src="img/user.svg"
                                          className="user-icon"
                                          alt="User Icon"
                                        />
                                      </td>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        {i.firstName}
                                      </td>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        {i.lastName}
                                      </td>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        {i.mobileNumber}
                                      </td>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        -
                                      </td>
                                      <td
                                        onClick={() => {
                                          console.log(i.id);
                                          props.history.push({
                                            pathname: "/newPatient",
                                            state: {
                                              id: i.id,
                                              mobileNumber: i.mobileNumber,
                                            },
                                          });
                                        }}
                                      >
                                        -
                                      </td>
                                      <td>
                                        {/* {console.log("Fname :"+i.firstName+' ALERT LEVEL: '+i.alertLevel)} */}
                                        {i.alertLevel === undefined && (
                                          <div className="status green"></div>
                                        )}
                                        {i.alertLevel === "yellow" && (
                                          <div className="status yellow"></div>
                                        )}
                                        {i.alertLevel === "yellow_monitor" && (
                                          <img
                                            src="img/yellow-border.png"
                                            height="20"
                                            width="20"
                                            alt="Yellow Icon"
                                          />
                                        )}
                                        {i.alertLevel === "red" && (
                                          <div className="status red"></div>
                                        )}
                                        {i.alertLevel === "green" && (
                                          <img
                                            src="img/samicare.png"
                                            height="20"
                                            width="20"
                                            alt="Yellow Icon"
                                          />
                                        )}
                                        {i.alertLevel === "orange" && (
                                          <div className="status orange"></div>
                                        )}
                                        {/* <!-- <img src="../assets/img/yellow.png" height="20" width="20" alt="Yellow Icon"> --> */}
                                      </td>
                                      <td className="max-w-160">
                                        <select
                                          className="form-select"
                                          onChange={(e) =>
                                            selectChange(
                                              parseInt(e.target.value),
                                              i
                                            )
                                          }
                                          value={selectAction}
                                        >
                                          <option value="ac">Action</option>
                                          <option value="3">
                                            Add Appointment
                                          </option>
                                          <option value="1">Edit User</option>
                                          <option value="2">Delete User</option>
                                          <option value="addAppointment">
                                            Pre-Call Test
                                          </option>
                                          <option value="4">
                                            Add/Manage Devices
                                          </option>
                                          <option value="addAppointment">
                                            De-Activate
                                          </option>
                                          <option value="addAppointment">
                                            Reset Password
                                          </option>
                                          <option value="addAppointment">
                                            Send Message
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                                              
                    <div
                      className="tab-pane fade"
                      role="tabpanel"
                      id="Appointments"
                    >
                      <Appointment />
                    </div>

                    <div className="tab-pane fade" role="tabpanel" id="Billing">
                      <Billing />
                    </div>
                    <div
                      className="tab-pane fade"
                      role="tabpanel"
                      id="Messages"
                    >
                      <Message />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {diagnosisTypeSelect.length > 0 &&
          <EditPatient editPatient={editPatient}
            onEditModalClose={() => { seteditPatient(false) }}
            epatient={editSelectedPatient}
            diagnosisType={diagnosisTypeSelect}
          />
        }
        {/* )} */}

        {addAppointment && <AddAppointment />}

        {deleteUser && <DeleteUser />}

        {/* {manageDevice && ( */}
        <ManageDevices
          manageDevice={manageDevice}
          onEditModalClose={() => {
            setmanageDevice(false);
          }}
          eManageDevice={selectManageDevice}
        />
        {/* )} */}
        {/* <AddNotes
         addNote = {addNote}
         onEditModalClose={() => { setAddNote(false) }}
         ePatient = {editSelectedPatient}

        /> */}
        
        <DeleteUser
                 deleteUser = {deleteUser}
                 onEditModalClose={() => { setdeleteUser(false) }}
                 ePatient = {editSelectedPatient}
        
        />

        <AddAppointment
                 addAppointment = {addAppointment}
                 onEditModalClose={() => { setaddAppointment(false) }}
                 ePatient = {editSelectedPatient}
        
        />

        
      </div>
    </div>
  );
}
