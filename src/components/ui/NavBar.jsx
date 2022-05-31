import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";

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
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
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
            <li class="nav-item dropdown">
              <a
                to="index/admin"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gestion UPIICSA
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/index/admin/validation"
                  >
                    Validaciones SISS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/index/admin/documentationI"
                  >
                    Recepción Documentación Inicial
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/index/admin/documentationF"
                  >
                    Recepción Documentación Final
                  </NavLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <NavLink
                      className="dropdown-item"
                      to="/index/admin/manageprof"
                    >
                      Gestión de Profesores
                    </NavLink>
                  </a>
                </li>
              </ul>
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
            <li className="nav-item">
              <NavLink
                to="index/proffesors"
                className="nav-link"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Profesores Disponibles
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
