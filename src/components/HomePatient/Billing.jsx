import React from "react";

export default function Billing() {
  return (
    <React.Fragment>
      <div className="tabs-header">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="true"
              href="#Summary"
            >
              Summary
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="false"
              href="#Tracker"
            >
              Tracker
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade active show" role="tabpanel" id="Summary">
          <div className="d-flex flex-wrap align-items-center mb-4">
            <h4 className="m-0">Billing Reports</h4>
            <div className="ms-auto d-flex flex-wrap align-items-center">
              <div className="form-group min-w-250 me-3 mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter"
                />
              </div>
              <div
                className="btn-group mt-3 mt-md-0"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-primary-outline">
                  <i className="zmdi zmdi-chevron-left zmdi-hc-lg"></i>
                </button>
                <button type="button" className="btn btn-primary-outline">
                  October
                </button>
                <button type="button" className="btn btn-primary-outline">
                  <i className="zmdi zmdi-chevron-right zmdi-hc-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>Month</th>
                  <th>Billing Code</th>
                  <th>Status</th>
                  <th className="w-200">Last Change</th>
                  <th></th>
                  <th className="w-200">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>October 2021</td>
                  <td>CCCM99490</td>
                  <td className="text-success">Ready</td>
                  <td>05/09/2021 05:00 PM</td>
                  <td>
                    <button className="btn btn-primary-theme btn-sm px-3">
                      <i className="zmdi zmdi-cloud-download zmdi-hc-lg text-white"></i>
                    </button>
                  </td>
                  <td>
                    <select className="form-select">
                      <option>Mark as...</option>
                      <option>Incomplete</option>
                      <option>Ready</option>
                      <option>Submitted</option>
                      <option>Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>October 2021</td>
                  <td>CCCM99490</td>
                  <td className="text-danger">Incomplete</td>
                  <td>05/09/2021 05:00 PM</td>
                  <td>
                    <button className="btn btn-primary-theme btn-sm px-3">
                      <i className="zmdi zmdi-cloud-download zmdi-hc-lg text-white"></i>
                    </button>
                  </td>
                  <td>
                    <select className="form-select">
                      <option>Mark as...</option>
                      <option>Incomplete</option>
                      <option>Ready</option>
                      <option>Submitted</option>
                      <option>Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>October 2021</td>
                  <td>CCCM99490</td>
                  <td className="text-primary">Submitted</td>
                  <td>05/09/2021 05:00 PM</td>
                  <td>
                    <button className="btn btn-primary-theme btn-sm px-3">
                      <i className="zmdi zmdi-cloud-download zmdi-hc-lg text-white"></i>
                    </button>
                  </td>
                  <td>
                    <select className="form-select">
                      <option>Mark as...</option>
                      <option>Incomplete</option>
                      <option>Ready</option>
                      <option>Submitted</option>
                      <option>Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>October 2021</td>
                  <td>CCCM99490</td>
                  <td className="text-success">
                    {" "}
                    <i className="zmdi zmdi-check-circle zmdi-hc-lg me-1"></i>{" "}
                    Paid
                  </td>
                  <td>05/09/2021 05:00 PM</td>
                  <td>
                    <button className="btn btn-primary-theme btn-sm px-3">
                      <i className="zmdi zmdi-cloud-download zmdi-hc-lg text-white"></i>
                    </button>
                  </td>
                  <td>
                    <select className="form-select">
                      <option>Mark as...</option>
                      <option>Incomplete</option>
                      <option>Ready</option>
                      <option>Submitted</option>
                      <option>Paid</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="tab-pane fade" role="tabpanel" id="Tracker">
          <div className="d-flex flex-wrap align-items-center mb-4">
            <h4 className="m-0">Tracker</h4>
            <div
              className="btn-group ms-auto"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-primary-outline">
                <i className="zmdi zmdi-chevron-left zmdi-hc-lg"></i>
              </button>
              <button type="button" className="btn btn-primary-outline">
                October
              </button>
              <button type="button" className="btn btn-primary-outline">
                <i className="zmdi zmdi-chevron-right zmdi-hc-lg"></i>
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <tbody>
                <tr>
                  <td className="w-150">John</td>
                  <td className="w-150">Patient</td>
                  <td className="w-250">
                    <p className="progress-desc">
                      1/16 <small>Days</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                      >
                        <span className="progress-bar-count">99454</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      12/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar light-blue"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      0/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-150">John</td>
                  <td className="w-150">Patient</td>
                  <td className="w-250">
                    <p className="progress-desc">
                      1/16 <small>Days</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      12/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar light-blue"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      0/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-150">John</td>
                  <td className="w-150">Patient</td>
                  <td className="w-250">
                    <p className="progress-desc">
                      1/16 <small>Days</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      12/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar light-blue"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      0/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-150">John</td>
                  <td className="w-150">Patient</td>
                  <td className="w-250">
                    <p className="progress-desc">
                      1/16 <small>Days</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      12/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar light-blue"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                  <td className="w-250">
                    <p className="progress-desc">
                      0/20 <small>Mins</small>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar blue"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="progress-bar-count">99454</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
