import React from 'react'

export const AddAppointment = () => {
    return (
        <div className="modal fade show" id="AddAppointment" tabIndex={-1} aria-labelledby="AddAppointmentLabel"
			aria-hidden="true" style={{display:"block"}}>
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Add/Edit Appointment</h3>
            </div>
            <div className="modal-body">
                <div className="profile-container d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <img src="../assets/img/avatar.png" alt="Avatar" />
                    </div>
                    <div className="flex-grow-1 ms-4 text-dark">
                        <h4 className="fw-light mb-1">XYZ ABCD</h4>
                        <p className="fw-bold mb-1">(744)126-4654</p>
                        <small className="fw-bold d-block m-0">MRN: Test</small>
                        <small className="fw-light">Last visit: 05/02/2021</small>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <select className="form-select">
                        <option>Type of Visit</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <select className="form-select">
                        <option>Munawar PV</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <hr className="my-4" /> 
                <div className="form-group mb-3">
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <input type="time" className="form-control" />
                </div>
                <div className="form-group mb-3">
                            <textarea className="form-control" rows={3} placeholder="Comments"></textarea>
                </div>
                <div className="form-action text-center mb-3">
                    <button type="button" className="btn btn-primary-theme min-w-100">Save</button>
                </div>
                <h5 className="mt-4 mb-3">Upcoming Appointment</h5>
                <div className="table-responsive">
                    <table className="table remove-first-child-padding table-hover m-0">
                        <thead className="table-light">
                            <tr>
                                <th>Type of Visit</th>
                                <th>Physician</th>
                                <th>Date / Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Test</td>
                                <td>Dr. John Smith</td>
                                <td>05/09/2021 04:00 PM</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Dr. John Smith</td>
                                <td>05/09/2021 04:00 PM</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Dr. John Smith</td>
                                <td>05/09/2021 04:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary-outline" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
    )
    
}