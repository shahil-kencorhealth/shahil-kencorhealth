import React from "react";
export default function Vitals(){
    return (<>  <div className="d-flex flex-wrap align-items-center mb-4">
    <h4 className="m-0">Vitals </h4>
    <div className="ms-auto d-flex align-items-center">
        <ul className="list-inline m-0 me-2">
            <li className="list-inline-item me-3">
                <div className="text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="08/03/2021 02:10 PM | Value: 100">
                    <img src="img/yellow.png" className="mb-1" height="25" width="25" alt="Yellow Icon"/>
                    <p className="font-size-14 text-center m-0"><small>WT</small></p>
                </div>
            </li>
            <li className="list-inline-item me-3">
                <div className="text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="08/03/2021 02:10 PM | Value: 120/180"/>
                    <img src="img/yellow.png" className="mb-1" height="25" width="25" alt="Yellow Icon"/>
                    <p className="font-size-14 text-center m-0"><small>BP</small></p>
               
            </li>
            <li className="list-inline-item me-3">
                <div className="text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="08/03/2021 02:10 PM | Value: 99">
                    <img src="img/yellow.png" className="mb-1" height="25" width="25" alt="Yellow Icon"/>
                    <p className="font-size-14 text-center m-0"><small>O2</small></p>
                </div>
            </li>
        </ul>
        <button type="button" className="btn btn-primary-theme mt-3 mt-md-0 me-3 align-self-start" data-bs-toggle="modal" data-bs-target="#AddVital"> <i className="zmdi zmdi-plus zmdi-hc-lg me-1"></i> Add Vitals</button>
        <button type="button" className="btn btn-primary-theme mt-3 mt-md-0 align-self-start" data-bs-toggle="modal" data-bs-target="#AddVitalComment"> <i className="zmdi zmdi-plus zmdi-hc-lg me-1"></i> Add Vital Comment</button>
    </div>
</div>
<ul className="list-unstyled text-left row mb-1">
    <li className="mb-3 col-md-3"><label className="text-muted mb-1">Patient Name</label><br/> Test Android</li>
    <li className="mb-3 col-md-3"><label className="text-muted mb-1">Account No</label><br/> 203254</li>
    <li className="mb-3 col-md-3"><label className="text-muted mb-1">Chart Period</label><br/> 10/07/2021 - 10/14/2021</li>
    <li className="mb-3 col-md-3"><label className="text-muted mb-1">Medicare No.</label><br/> Test</li>
</ul>
<div className="table-responsive">
    <table className="table table-hover m-0">
        <thead className="table-light">
            <tr>
                <th>Vital</th>
                <th>Latest</th>
                <th>Baseline</th>
                <th>Last Taken</th>
                <th className="text-center">Delete</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Weight</td>
                <td>100</td>
                <td>0 
                    <a href="javascript:;"><i className="zmdi zmdi-edit zmdi-hc-lg ms-1"></i></a>
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-check-circle zmdi-hc-lg text-success ms-1"></i></a>
                    <a href="javascript:;"><i className="zmdi zmdi-close-circle zmdi-hc-lg text-danger ms-1"></i></a>
                </td>
                <td>08/03/2021 02:10 PM</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#DeleteVital"><i className="zmdi zmdi-delete zmdi-hc-lg"></i></a></td>
                <td className="text-center"><a href="javascript:;"><i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>100</td>
                <td>0 
                    <a href="javascript:;"><i className="zmdi zmdi-edit zmdi-hc-lg ms-1"></i></a>
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-check-circle zmdi-hc-lg text-success ms-1"></i></a>
                    <a href="javascript:;"><i className="zmdi zmdi-close-circle zmdi-hc-lg text-danger ms-1"></i></a>
                </td>
                <td>08/03/2021 02:10 PM</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#DeleteVital"><i className="zmdi zmdi-delete zmdi-hc-lg"></i></a></td>
                <td className="text-center"><a href="javascript:;"><i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>100</td>
                <td>0 
                    <a href="javascript:;"><i className="zmdi zmdi-edit zmdi-hc-lg ms-1"></i></a>
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-check-circle zmdi-hc-lg text-success ms-1"></i></a>
                    <a href="javascript:;"><i className="zmdi zmdi-close-circle zmdi-hc-lg text-danger ms-1"></i></a>
                </td>
                <td>08/03/2021 02:10 PM</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#DeleteVital"><i className="zmdi zmdi-delete zmdi-hc-lg"></i></a></td>
                <td className="text-center"><a href="javascript:;"><i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td colSpan={6}>
                    <div className="d-flex flex-wrap mb-4">
                        <div className="d-flex align-items-center">
                            <span className="me-3">Latest: <strong>99.00 </strong></span>
                            <span className="me-3">Avg: <strong>99.00 </strong></span>
                            <span className="me-3">Min: <strong>99.00 </strong></span>
                            <span className="me-3">Max: <strong>99.00 </strong></span>
                        </div>
                        <div className="ms-auto d-flex flex-wrap align-items-center">
                            <div className="btn-group align-items-start me-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1"  checked/>
                                <label className="btn btn-primary-outline" htmlFor="btnradio1">Day</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                <label className="btn btn-primary-outline" htmlFor="btnradio2">Week</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                <label className="btn btn-primary-outline" htmlFor="btnradio3">Month</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" />
                                <label className="btn btn-primary-outline" htmlFor="btnradio4">Year</label>
                            </div>
                            <button type="button" className="btn btn-primary-theme mt-3 mt-md-0"><i className="zmdi zmdi-print zmdi-hc-lg me-1"></i> Print</button>
                        </div>
                    </div>
                    <img src="img/chart.png" height="200" alt="Chart"/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<h4 className="mt-4">Questionnaires </h4></>)
}