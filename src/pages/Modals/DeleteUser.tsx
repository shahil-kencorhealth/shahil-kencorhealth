import { useState } from "react";
import { dispatch } from "../../redux";
import { deletePatient, sendMessage } from "../../redux/action";

export const DeleteUser = ({deleteUser,onEditModalClose,ePatient}:any) => {

    // const [msg, setMsg] = useState("");
    const onDeleteMessage = () => {
        dispatch(deletePatient( ePatient.id));
    }

    return (
        <>
            {console.log("deleteUser", deleteUser) }
            { deleteUser &&
                <div className="modal fade show" id="DeleteUser" tabIndex={-1} aria-labelledby="DeleteUserLabel"
                    aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered text-center">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center border-0">
                                <h3 className="modal-title">Delete Patient</h3>
                            </div>
                            <div className="modal-body">
                                <p className="m-0">Are you sure want to delete XYZ ABCD?</p>
                            </div>
                            <div className="modal-footer justify-content-center border-0">
                                <button type="button" className="btn btn-primary-theme min-w-100" data-bs-dismiss="modal" onClick={onDeleteMessage} >Ok</button>
                                <button type="button" className="btn btn-primary-outline min-w-100" data-bs-dismiss="modal"  onClick={onEditModalClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );   
}