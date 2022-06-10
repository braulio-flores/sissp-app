import React from "react";
import { useSelector } from "react-redux";
import ValidationRequest from "./ValidationRequest";
import ValidationWaiting from "./ValidationWaiting";

const ValidacionComponent = () => {
  const { statusRequested } = useSelector((data) => data.ui.validationPage);

  const { myValidation } = useSelector((data) => data.ui);

  // const theLastPart = myValidation
  //   ? myValidation && myValidation.retry && myValidation.retry === undefined
  //     ? true
  //     : false
  //   : false;

  // const retryVar = theLastPart ? myValidation.retry === true : false;


  return (
    <>
      {!myValidation ? ( //ESTE SE MUESTRA SI NO HE HECHO VALIDACIONES, PERO ADEMAS SI ME MANDAN UN RETRY SE MANDARA UN MENSAJE ADICIONAL
        <ValidationRequest />
      ) : statusRequested && !myValidation.validated && !myValidation.retry ? (
        <ValidationWaiting />
      ) : (
        statusRequested &&
        myValidation.validated &&
        myValidation.retry === false && (
          <div
            className="container text-center pt-5"
            style={{ fontSize: "200px" }}
          >
            <i className="bi bi-check-circle"></i>
            <h3 className="mb-0">
              Tu registro en el SISS ha sido validado, continua con tu proceso.
            </h3>
          </div>
        )
      )}

      {// SI TENGO ESTATUS DE ENVIADO Y ADEMAS TENGO UN RETRY

      myValidation && myValidation.retry && (
        <>
          <ValidationRequest />
        </>
      )}
    </>
  );
};

export default ValidacionComponent;
