import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRequestDocumentationClicked } from "../../actions/docs";
import TitleWindow from "../ui/TitleWindow";

const InicialDocumentationComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((data) => data.ui.session);

  const { myDocument } = useSelector((data) => data.docs);

  console.log("mm", myDocument);

  const handleSubmitFormDocs = (e) => {
    e.preventDefault();
  };

  // ENVIO NUEVO DE DOC
  const handleSendDocumentation = (e) => {
    dispatch(startRequestDocumentationClicked(user));
  };

  const handleSendDocumentationAgain = () => {
    console.log("aqui se envia la doc");
  };

  return (
    <>
      {/* ESTE TITULO SE MANDARA CUANDO ESTE SIN ENVIOS O CON ENVIO ERRONEO */}
      {(!myDocument || (myDocument.retry && myDocument.retry === true)) && (
        <TitleWindow
          title="Documentación Inicial"
          descriptionPage={`${
            myDocument
              ? "Los documentos que enviaste previamente no fueron aceptados, asegurate de que todos los datos sean correctos."
              : "Una vez validado por tu Unidad y por tu prestatario, deberas descargar la carta compromiso que el SISS te proporciona, y sin firmarla deberas de unirla en un solo pdf junto con tu CURP, Constancia de creditos vigente y Constancia de Vigencia de Servicio Médico en ese orden, posteriormente tendras que subir el PDF en este mismo apartado."
          }`}
        />
      )}

      {/* ESTE TITULO SE MANDARA CUANDO ESTE EN ESPERA, ESTO ES LO UNICO QUE SE MOSTRARA EN ESOS MOMENTOS */}
      {(myDocument && myDocument.validated === false && !myDocument.retry)  &&(
        <TitleWindow
          title="Documentación Inicial"
          descriptionPage="Ya has enviado tu documentacion, en breve se revisara y se te notificara automaticamente cuando todo haya sido revisado y este correctamente. No tardamos, gracias."
        />
      )}

      {/* ESTO SE MOSTRARA EN AMBOS CASOS, ENVIADO, O ENVIADO CON ERROR */}
      {(!myDocument || myDocument.retry === true) && (
        <div className="container">
          <form onSubmit={handleSubmitFormDocs}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Sube tu documentación (Un único PDF con la documentacion en el
                siguiente orden. Carta Compromiso descargada del SISS, CURP,
                Constancia de Creditos Vigente, Constancia de Vigencia del
                Servicio Médico)
              </label>
              <p className="text-center text-danger">
                Por el momento no se pueden subir archivos, se hace la demo con
                un archivo en crudo. Pero el formulario quedaria asi. Para
                probarlo, solo clickea en el boton de enviar doc.
              </p>
              <input className="form-control" type="file" id="formFile" />
            </div>
            {/* TENDROMOS DOS BOTONES, ENVIO POR PRIMERA VEZ Y REENVIO */}
            {myDocument ? (
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleSendDocumentationAgain}
              >
                Enviar Documentación Nuevamente
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={handleSendDocumentation}
              >
                Enviar Documentación
              </button>
            )}
          </form>
        </div>
      )}

      {/* ESTO SE MUESTRA CUANDO YA ESTE VALIDADO */}
      {myDocument && myDocument.validated === true && (
        <div
          className="container text-center pt-5"
          style={{ fontSize: "200px" }}
        >
          <i className="bi bi-file-earmark-check"></i>
          <h3 className="mb-0">
            Tu documentacion ha sido recibida y validada, continua con tu
            proceso tranquilamente.
          </h3>
        </div>
      )}
    </>
  );
};

export default InicialDocumentationComponent;
