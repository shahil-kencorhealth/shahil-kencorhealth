import React from "react";

export default function Appointment() {
  return (
    <React.Fragment>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
        <div>
            <h4>Today's Schedule</h4>
            <p className="text-danger fw-500 m-0">
              There are currently 0 Patient waiting for you
            </p>
        </div>
        <div className="ms-auto d-flex flex-wrap align-items-center">
          <div className="form-group min-w-250 mt-3 mt-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Filter Patients"
            />
          </div>
        </div>
      </div>
      <div className="table-responsive mb-4">
        <table className="table table-hover m-0">
          <thead className="table-light">
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Physician</th>
              <th>Appointment Time</th>
              <th>Reason for Visit</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>Tomorrow's Schedule</h4>
      <p className="text-success fw-500">You have 0 visits tomorrow</p>
      <div className="table-responsive">
        <table className="table table-hover m-0">
          <thead className="table-light">
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Physician</th>
              <th>Appointment Time</th>
              <th>Reason for Visit</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/user.svg" className="user-icon" alt="User Icon" />
              </td>
              <td>John</td>
              <td>Smith</td>
              <td>Dr. Peter Williams</td>
              <td>05/09/2021 05:00 PM</td>
              <td>Unwell Health</td>
              <td>
                <div className="status yellow"></div>
                {/* <!-- <img src="img/yellow.png" height={20} width={20} alt="Yellow Icon"> --> */}
              </td>
              <td className="max-w-160">
                <select className="form-select">
                  <option>Action</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
