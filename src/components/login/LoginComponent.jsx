import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { startLogin } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import "./LoginComponent.partial.css";

const LoginComponent = () => {
  const { session } = useSelector((data) => data.ui);
  const { valuesForm, handleInputChange, reset } = useForm({
    inputBoleta: "",
    inputPass: "",
  });
  const dispatch = useDispatch();

  const { inputBoleta, inputPass } = valuesForm;

  const handleSubmitLogin = (e) =>{
    e.preventDefault();
    reset();
    dispatch(startLogin(inputBoleta, inputPass))
  }

  return !session.start ? (
    <div className="container login-container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 login-form-1">
          <h3>
            Ingreso al Sistema de Apoyo a la Gestion del Servicio Social en
            UPIICSA
          </h3>
          <form onSubmit={handleSubmitLogin}>
            <div className="form-group mb-1">
              <input
                type="text"
                name="inputBoleta"
                onChange={handleInputChange}
                value={inputBoleta}
                className="form-control"
                placeholder="Boleta"
                required
              />
            </div>
            <div className="form-group mb-1">
              <input
                name="inputPass"
                onChange={handleInputChange}
                value={inputPass}
                type="password"
                className="form-control"
                placeholder="Contraseña"
                required
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
