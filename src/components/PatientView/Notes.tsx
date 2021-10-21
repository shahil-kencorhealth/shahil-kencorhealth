import React from "react";
export default function Notes(){
    return (<> <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
    <h4 className="m-0">Notes </h4>
    <button type="button" className="btn btn-primary-theme mt-3 mt-md-0" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-plus zmdi-hc-lg me-1"></i> Add New</button>
</div>
<div className="table-responsive">
    <table className="table table-hover m-0">
        <thead className="table-light">
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Origin</th>
                <th>Note</th>
                <th>Vital Comments</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>10/11/2021</td>
                <td>06:38</td>
                <td>Munawar PV</td>
                <td>Careplan</td>
                <td>vvb</td>
                <td>Lorem ipsum</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-edit zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td>10/11/2021</td>
                <td>06:38</td>
                <td>Munawar PV</td>
                <td>Careplan</td>
                <td>vvb</td>
                <td>Lorem ipsum</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-edit zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td>10/11/2021</td>
                <td>06:38</td>
                <td>Munawar PV</td>
                <td>Careplan</td>
                <td>vvb</td>
                <td>Lorem ipsum</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-edit zmdi-hc-lg"></i></a></td>
            </tr>
            <tr>
                <td>10/11/2021</td>
                <td>06:38</td>
                <td>Munawar PV</td>
                <td>Careplan</td>
                <td>vvb</td>
                <td>Lorem ipsum</td>
                <td className="text-center"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#AddNote"><i className="zmdi zmdi-edit zmdi-hc-lg"></i></a></td>
            </tr>
        </tbody>
    </table>
</div></>)
}