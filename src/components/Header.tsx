import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
        >
          <img src="/img/logo-dark.png" height="35" alt="Logo Dark" />
        </a>
        <ul className="navbar-nav order-md-2">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center pe-0"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="img/avatar.png"
                className="rounded-circle"
                alt="user"
                width="30"
                height="30"
              />
              <span className="ms-2 d-none d-sm-inline">
                Welcome Munawar PV
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="javascript;:">
                  <i className="zmdi zmdi-lock-open zmdi-hc-fw zmdi-hc-lg me-1"></i>{" "}
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item align-self-center ms-4">
            <a type="button" className="btn btn-primary-theme btn-sm" href="https://test.kencorhealth.com/adminportal/" target="_blank"
          rel="noreferrer">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
