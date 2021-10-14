import React from "react";

export default function Message() {
  return (
    <React.Fragment>
      <div className="d-flex flex-wrap align-items-center mb-4">
        <h4 className="m-0">Patient Chat</h4>
        <div className="ms-auto d-flex align-items-center">
          {/* flex-wrap  */}
          <select className="form-select w-150 ms-3 mt-3 mt-md-0">
            <option>Filter by</option>
            <option>None</option>
            <option>Green State</option>
            <option>Yellow State</option>
            <option>Red State</option>
            <option>Grey State</option>
          </select>
          <select className="form-select w-150 ms-3 mt-3 mt-md-0">
            <option>Sort by</option>
            <option>Most recent</option>
            <option>Most unread messages</option>
          </select>
          <button
            type="button"
            className="btn btn-primary-outline ms-3 mt-3 mt-md-0"
          >
            Select/Deselect All
          </button>
          <button
            type="button"
            className="btn btn-primary-theme ms-3 mt-3 mt-md-0"
            data-bs-toggle="modal"
            data-bs-target="#BroadcastMessage"
          >
            Send Broadcast
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover m-0">
          <tbody>
            <tr>
              <td className="w-100p">
                <div className="custom-control custom-checkbox without-label">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="message1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="message1"
                  ></label>
                </div>
              </td>
              <td className="w-100p">
                <img src="img/green.png" height={20} width={20} alt="Icon" />
              </td>
              <td>Test</td>
              <td>20/10/2021</td>
            </tr>
            <tr>
              <td className="w-100p">
                <div className="custom-control custom-checkbox without-label">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="message2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="message2"
                  ></label>
                </div>
              </td>
              <td className="w-100p">
                <div className="status grey"></div>
              </td>
              <td>Test</td>
              <td>20/10/2021</td>
            </tr>
            <tr>
              <td className="w-100p">
                <div className="custom-control custom-checkbox without-label">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="message3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="message3"
                  ></label>
                </div>
              </td>
              <td className="w-100p">
                <img src="img/green.png" height={20} width={20} alt="Icon" />
              </td>
              <td>Test</td>
              <td>20/10/2021</td>
            </tr>
            <tr>
              <td className="w-100p">
                <div className="custom-control custom-checkbox without-label">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="message4"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="message4"
                  ></label>
                </div>
              </td>
              <td className="w-100p">
                <div className="status grey"></div>
              </td>
              <td>Test</td>
              <td>20/10/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
