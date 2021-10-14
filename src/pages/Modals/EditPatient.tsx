import React from 'react'

export const EditPatient = () => {
    return (
<div className="modal fade show" id="EditPatient" tabIndex={-1} aria-labelledby="EditPatientLabel"
			aria-hidden="true" style={{display:"block"}}>
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Edit Patient</h3>
            </div>
            <div className="modal-body">
                <div className="form-group mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Physician</label>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Email (Optional)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">MRN (Optional)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">DOB</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Diagnosis information (optional)</label>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary-outline min-w-150" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary-theme min-w-150" data-bs-dismiss="modal">Save</button>
            </div>
        </div>
    </div>
</div>
    )
    
}