import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <a className="navbar-brand"  href="/">
        SAPS
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link"  href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="/">
              Alumnos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="/">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="/">
              Guias y Links
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
