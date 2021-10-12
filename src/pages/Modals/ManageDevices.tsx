import React from 'react'

export const ManageDevices = () => {
    return (
        <div className="modal fade" id="AddDevice" tabIndex={-1} aria-labelledby="AddDeviceLabel"
			aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Add/Manage Device</h3>
            </div>
            <div className="modal-body">
                <div className="form-group mb-3">
                    <label className="form-label">Add By</label>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">BP</label>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Weight</label>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">SPO2</label>
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
</div>    )
    
}