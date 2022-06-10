import React, { useState } from "react";
import TitleWindow from "../ui/TitleWindow";
import captura from "../../resources/images/tiposServicio.png";
import { useDispatch, useSelector } from "react-redux";
import {
  requestValidationClicked,
  startRequestValidationClicked,
} from "../../actions/ui";
import { updateValidation } from "../../helpers/getValidations";
import Swal from "sweetalert2";

const ValidationRequest = () => {
  const [registre, setRegistre] = useState(true);
  const [buttonDisable, setButtonDisabled] = useState(true);
  const { user } = useSelector((data) => data.ui.session);

  const { statusRequested } = useSelector((data) => data.ui.validationPage);

  const { myValidation } = useSelector((data) => data.ui);

  const dispatch = useDispatch();

  const handleInputChangeRegistration = (value) => {
    setRegistre(value);
    setButtonDisabled(!value);
  };

  const handleClickRequestValidation = () => {
    // console.log('requested');
    dispatch(startRequestValidationClicked(user));
    // VAMOS A CREAR UN ALERT QUE DIGA QUE YA SE MANDO Y ADEMAS ACTUALIZAR EL MYVALIDATE
  };

  const handleClickRequestValidationAgain = () => {
    // console.log('requested');
    updateValidation(user.boleta, {
      ...myValidation,
      retry: false,
    });
    // VAMOS A CREAR UN ALERT QUE DIGA QUE YA SE MANDO Y ADEMAS ACTUALIZAR EL MYVALIDATE
    dispatch(
      requestValidationClicked({
        ...myValidation,
        retry: false,
      })
    );

    Swal.fire({
      title: "Validacion Solicitada Nuevamente",
      text: "Se ha mandado tu solicitud de validacion nuevamente",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  return (
    <>
      <TitleWindow
        title="Socilitud de validacion en el SISS"
        descriptionPage={`${
          myValidation && statusRequested && myValidation.retry === true
            ? "La solicitud que llenaste previamente no fue correcta, asegurate de que todos los datos sean correctos."
            : "En esta seccion podras realizar la solicitud de tu validacion de registro dentro del SIS a la Unidad Acedmica, para que esta revise que el registro es correcto"
        }`}
      />

      {// SI TENGO ESTATUS DE ENVIADO Y ADEMAS TENGO UN RETRY
      myValidation && statusRequested && myValidation.retry === true && (
        <>
          <div
            className="container text-center pt-5 mt-0"
            style={{ fontSize: "200px" }}
          >
            <h3 className="mb-0">Validacion Rechazada</h3>
            <i class="bi bi-x-circle"></i>
            <h5 className="mb-0 text-info">{myValidation.comment}</h5>
            <h4 className="mb-0">
              Revisa tus datos e intentalo de nuevo a la brevedad
            </h4>
            <button
              type="button"
              className={`btn btn-lg btn-block btn-outline-success`}
              onClick={handleClickRequestValidationAgain}
            >
              Solicitar Nueva Validacion en el SISS
            </button>
          </div>
        </>
      )}

      {!myValidation && (
        <div className="container">
          <p className="text-warning mb-0 mt-1">
            Responde la siguiente pregunta para poder solicitar tu validacion*
          </p>
          <form>
            <label
              htmlFor="staticEmail"
              className="col-sm-11 col-form-label bold mt-2 mb-2"
            >
              <b>
                ¿Ya realizaste tu registro en el SISS con alguna de las
                modalidades que se muestran a continuacion?
              </b>
              <br />
              <img
                width={400}
                src={captura}
                alt="Tipos de servicio Social en el IPN"
              />
            </label>
            <div className="form-group row">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={() => handleInputChangeRegistration(true)}
                  name="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Si
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={() => handleInputChangeRegistration(false)}
                  name="inlineCheckbox1"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  No
                </label>
              </div>
              {!registre && (
                <>
                  <p className="text-danger mb-0 mt-1">
                    Es necesario primero realizar tu preregistro en el SISS para
                    poder solicitar la validacion de este mismo a la unidad
                    academica*
                  </p>
                </>
              )}
            </div>

            <button
              type="button"
              className={`btn mt-5 btn-lg btn-block ${
                !buttonDisable ? "btn-outline-success" : "btn-outline-secondary"
              }`}
              disabled={buttonDisable}
              onClick={handleClickRequestValidation}
            >
              Solicitar Validacion en el SISS
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ValidationRequest;
