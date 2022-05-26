import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./LoginComponent.partial.css";

const LoginComponent = () => {
  const { session } = useSelector((data) => data.ui);

  return !session ? (
    <div className="container login-container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 login-form-1">
          <h3>
            Ingreso al Sistema de Apoyo a la Gestion del Servicio Social en
            UPIICSA
          </h3>
          <form>
            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Boleta"
              />
            </div>
            <div className="form-group mb-1">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/index" replace={true} />
  );
};

export default LoginComponent;
