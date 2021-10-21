export const AddVitalComments = () => {
    return (
        <div className="modal fade" id="AddVitalComment" tabIndex={-1} aria-labelledby="AddVitalCommentLabel"
			aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Add Vital Comment</h3>
            </div>
            <div className="modal-body">
                <div className="form-group mb-3">
                    <label className="form-label">Vital</label>
                    <select className="form-select">
                        <option>Select</option>
                        <option>Weight</option>
                        <option>SPO2</option>
                        <option>GFR</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Comment</label>
                    <textarea rows={3} className="form-control"></textarea>
                    <div className="d-flex flex-wrap justify-content-between">
                        <span className="form-text text-danger">Please Enter minimum 5 characters!</span>
                        <span className="form-text">0 / 4000</span>
                    </div>
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