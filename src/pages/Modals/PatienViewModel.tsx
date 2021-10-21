export const PatientViewModel = () => {
    return (
        <div className="modal fade" id="PatientView" tabIndex={-1} aria-labelledby="PatientViewLabel"
        aria-hidden="true">
<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header px-3">
            <h3 className="modal-title">Patient View</h3>
        </div>
        <div className="modal-body p-0">
            <ul className="list-group list-group-flush m-0">
                <li className="list-group-item d-flex justify-content-between py-2">
                    Member Since: <span className="fw-500"> 08-03-2021 </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    Device Type: <span className="fw-500">IOS </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    Sami Version: <span className="fw-500">1.8(3) </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    Model: <span className="fw-500">iPhone 13,4 </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    OS Version: <span className="fw-500">14.6 </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    Manufacturer: <span className="fw-500">Apple </span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-2">
                    Screen Size: <span className="fw-500">3.0" </span>
                </li>
            </ul>
        </div>
        <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-primary-theme min-w-100" data-bs-dismiss="modal">Ok</button>
        </div>
    </div>
</div>
</div>
    )
    
}