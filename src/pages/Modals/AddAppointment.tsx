import moment from 'moment';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointments, getAppointments, getVisitReason } from '../../redux/action';
import { Store } from '../../redux/Actions';
import { formatDate,formatDateTime } from '../../util/utils';

export const AddAppointment = ({addAppointment,onEditModalClose,ePatient}:any) => {
    
    const dispatch = useDispatch();
    const visitReasons = useSelector((state: Store) => state.patientReducer.visitReasons);
    const doctor = useSelector((state: Store) => state.physicianReducer.physicianList);
    const appointments = useSelector((state: Store) => state.patientReducer.appointments);
    const [reason, setreason] = useState('');
    const [doc, setDoc] = useState('');
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [comment, setcomment] = useState("");
    
    useEffect(() => {
        if (ePatient) {
            dispatch(getVisitReason());
            dispatch(getAppointments(ePatient.id));
            console.log("visitReasons", visitReasons);
        }
    }, [ePatient])

    useEffect(() => {
        if(Object.values(visitReasons).length > 0 )
{        setreason(Object.values(visitReasons)[0].id);
}    }, [visitReasons]);

    useEffect(() => {
        if(doctor.length > 0)
{        setDoc(doctor[0].id);

        }
    }, [doctor]);

    const onAddAppointment = () => {
        const values:any = [];
        if (comment.length > 0)
        { values.comments = comment }
        
        if (date.length > 0)
        {
            // var dateTime = moment(date + ' ' + time, 'DD/MM/YYYY HH:mm');
            var momentObj = moment(date + time, 'YYYY-MM-DDLT');
            var dateTime = momentObj.format('YYYY-MM-DD HH:mm:s');

            console.log("dateTime", dateTime);
            
            const dates = new Date(dateTime);
            console.log("ORIGINAL date", dates);
            console.log("date", dates.getTime());
            console.log("Formateed date", formatDateTime(dates.getTime()));

            values.when = dates.getTime();
        }
        if (doc.length > 0)
        {
            values.physicianId = doc;
        }
        if (reason.length > 0)
        {
            values.reasonId = reason
        }
        values.patientId = ePatient.id;
        console.log("object", ePatient.id);
        dispatch(addAppointments(values));
        // dispatch(getAppointments(ePatient.id));

    }

    return (
        <>
            {addAppointment &&
                <div className="modal fade show" id="AddAppointment" tabIndex={-1} aria-labelledby="AddAppointmentLabel"
                    aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Add/Edit Appointment</h3>
                            </div>
                            <div className="modal-body">
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col">
                                        <div className="profile-container d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0">
                                                <img src="./img/avatar.png" alt="Avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-4 text-dark">
                                                <h4 className="fw-light mb-1">{ePatient.fullName}</h4>
                                                <p className="fw-bold mb-1">{ePatient.mobileNumber}</p>
                                                <small className="fw-bold d-block m-0">MRN: {ePatient?.mrnNumber || ''}</small>
                                                <small className="fw-light">Last visit: 05/02/2021</small>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <select className="form-select" onChange={(e)=>setreason(e.target.value)} value={reason}>
                                                {/* <option>Type of Visit</option> */}
                                            {Object.values(visitReasons).map(i => (
                                                <option value={i.id}>{ i.reason}</option>
                                            ))}
                                            {/* <option>Option 2</option>
                                                <option>Option 3</option> */}
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <select className="form-select" value={doc} onChange={(e)=>setDoc(e.target.value)}>
                                                {/* <option>Doctor</option> */}
                                            {doctor.map((i:any) => (
                                                <option value={i.id}>{i.fullName}</option>
                                                ))}
                                            {/* <option>Option 2</option>
                                                <option>Option 3</option> */}
                                            </select>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="form-group mb-3">
                                            <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="time" className="form-control" value={time} onChange={(e)=>{setTime(e.target.value)}} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <textarea className="form-control" rows={3} placeholder="Comments" onChange={(e)=>setcomment(e.target.value)}></textarea>
                                        </div>
                                        <div className="form-action text-center mb-3">
                                            <button type="button" className="btn btn-primary-theme min-w-100" onClick={onAddAppointment}>Save</button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="mb-3">Upcoming Appointment</h5>
                                        <div className="table-responsive">
                                            <table className="table remove-first-child-padding m-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Type of Visit</th>
                                                        <th>Physician</th>
                                                        <th>Date / Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {!Object.values(appointments).length ? (
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="my-5 py-5">
                                                                <span className="d-block mb-3"><i className="zmdi zmdi-file-text zmdi-hc-3x"></i></span>
                                                                <h4 className="m-0"> No Records Found </h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ): Object.values(appointments).map(i=>(
                                                    <tr>
                                                        <td>{i.reason}</td>
                                                        <td>{i.physicianName}</td>
                                                        <td>{ formatDateTime(i.when)}</td>
                                                    </tr>
                                                ))}
                                                    {/* <tr>
                                                        <td>Test</td>
                                                        <td>Dr. John Smith</td>
                                                        <td>05/09/2021 04:00 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Test</td>
                                                        <td>Dr. John Smith</td>
                                                        <td>05/09/2021 04:00 PM</td>
                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary-outline" data-bs-dismiss="modal" onClick={onEditModalClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" style={{zIndex:-9999}}></div>
                </div>
            }
    </>
    )
    
}