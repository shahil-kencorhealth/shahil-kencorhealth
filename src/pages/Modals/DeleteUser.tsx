import React from 'react'

export const DeleteUser = () => {
    return (
        <div className="modal fade" id="DeleteUser" tabIndex={-1} aria-labelledby="DeleteUserLabel"
			aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered text-center">
        <div className="modal-content">
            <div className="modal-header justify-content-center border-0">
                <h3 className="modal-title">Delete Patient</h3>
            </div>
            <div className="modal-body">
                <p className="m-0">Are you sure want to delete XYZ ABCD?</p>
            </div>
            <div className="modal-footer justify-content-center border-0">
                <button type="button" className="btn btn-primary-theme min-w-100" data-bs-dismiss="modal">Ok</button>
                <button type="button" className="btn btn-primary-outline min-w-100" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
    )
    
}