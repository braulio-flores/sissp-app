import React, { useState } from "react";
import TitleWindow from "../ui/TitleWindow";
import captura from "../../resources/images/tiposServicio.png";
import { useDispatch } from "react-redux";
import { startRequestValidationClicked } from "../../actions/ui";

const ValidationRequest = () => {
  const [registre, setRegistre] = useState(true);
  const [buttonDisable, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleInputChangeRegistration = (value) => {
    setRegistre(value);
    setButtonDisabled(!value);
  };

  const handleClickRequestValidation = () =>{
    // console.log('requested');
    dispatch(startRequestValidationClicked());
    
  }

  return (
    <>
      <TitleWindow
        title="Socilitud de validacion en el SISS"
        descriptionPage="Es esta seccion podras realizar la solicitud de tu validacion de registro dentro del SIS a la Unidad Acedmica, para que esta revise que el registro es correcto"
      />

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
    </>
  );
};

export default ValidationRequest;
