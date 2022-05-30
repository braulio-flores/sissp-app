import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to="index/progress"
                className="nav-link"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Proceso
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Guias y Links
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to="index/faqs"
                className="nav-link"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
