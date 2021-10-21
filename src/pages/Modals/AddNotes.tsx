import { useState } from "react";
import { dispatch } from "../../redux";
import { sendMessage } from "../../redux/action";

export const AddNotes = ({addNote,onEditModalClose,ePatient}:any) => {

    const [msg, setMsg] = useState("");
    const onAddMessage = () => {
        dispatch(sendMessage(msg, ePatient.id));
        onEditModalClose();
    }
    return (
        <>
            {console.log("object addNote",addNote) }
            {addNote &&
                <div className="modal fade show" style={{ display: "block" }} id="AddNote" tabIndex={-1} aria-labelledby="AddNoteLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Add Note</h3>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <label className="form-label">Note</label>
                                    <textarea className="form-control" rows={4} onChange={(e)=>{setMsg(e.target.value)}}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary-outline min-w-150" data-bs-dismiss="modal" onClick={onEditModalClose}>Cancel</button>
                                <button type="button" className="btn btn-primary-theme min-w-150" data-bs-dismiss="modal" onClick={onAddMessage}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}