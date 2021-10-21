export const AddVitals = () => {
    return (
        <div className="modal fade" id="AddVital" tabIndex={-1}aria-labelledby="AddVitalLabel"
        aria-hidden="true">
<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h3 className="modal-title">Add Vital</h3>
        </div>
        <div className="modal-body">
            <div className="form-group mb-3">
                <label className="form-label">Weight</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">SOP2</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">GFR</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Time of Recording</label>
                <input type="datetime-local" className="form-control"/>
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