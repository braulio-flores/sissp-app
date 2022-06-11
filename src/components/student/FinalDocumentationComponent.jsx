import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestDocClicked,
  startRequestDocumentationClicked,
} from "../../actions/docs";
import { updateDocumentation } from "../../helpers/getDocuments";
import TitleWindow from "../ui/TitleWindow";
import Swal from "sweetalert2";

const FinalDocumentationComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((data) => data.ui.session);

  const { myDocument } = useSelector((data) => data.docs);
  const data = useSelector((data) => data.docs);

  console.log('myDocument', data);

  const handleSubmitFormDocs = (e) => {
    e.preventDefault();
  };

  // ENVIO NUEVO DE DOC
  const handleSendDocumentation = () => {
    updateDocumentation(user.boleta, {
      ...myDocument,
      inicialOrFinal: false,
      validated: false, 
      retry: false,
      comment: "",
    });
    // VAMOS A CREAR UN ALERT QUE DIGA QUE YA SE MANDO Y ADEMAS ACTUALIZAR EL MYVALIDATE
    dispatch(
      requestDocClicked({
        ...myDocument,
        inicialOrFinal: false,
        retry: false,
        comment: "",
      })
    );

    Swal.fire({
      title: "Documentación Enviada Correctamente",
      text: "Se ha mandado tu documentación, espera a que sea revisada.",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  const handleSendDocumentationAgain = () => {
    updateDocumentation(user.boleta, {
      ...myDocument,
      retry: false,
    });
    // VAMOS A CREAR UN ALERT QUE DIGA QUE YA SE MANDO Y ADEMAS ACTUALIZAR EL MYVALIDATE
    dispatch(
      requestDocClicked({
        ...myDocument,
        retry: false,
      })
    );

    Swal.fire({
      title: "Documentación Enviada Nuevamente",
      text: "Se ha mandado tu documentación nuevamente. Espera a que sea revisada.",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  console.log(myDocument);
  return (
    <>
      {/* ESTE TITULO SE MANDARA CUANDO ESTE CON ENVIO PERO DE INICIO */}
      {(myDocument.inicialOrFinal || ( myDocument.inicialOrFinal && myDocument.retry)) && (
        <TitleWindow
          title="Documentación Final"
          descriptionPage={`${
            !myDocument.inicialOrFinal
              ? "Los documentos que enviaste previamente no fueron aceptados, asegurate de que todos los datos sean correctos."
              : "Una vez cubiertas tus horas, debes de mandar a tu Unidad la documentación solicitada. Constancia de termino y carta de termino."
          }`}
        />
      )}

      {/* ESTE TITULO SE MANDARA CUANDO ESTE EN ESPERA, ESTO ES LO UNICO QUE SE MOSTRARA EN ESOS MOMENTOS */}
      {!myDocument.inicialOrFinal && myDocument.validated === false && !myDocument.retry && (
        <TitleWindow
          title="Documentación Final"
          descriptionPage="Ya has enviado tu documentacion, en breve se revisara y se te notificara automaticamente cuando todo haya sido revisado y este correcta. No tardamos, gracias."
        />
      )}

      {// SI TENGO ESTATUS DE ENVIADO Y ADEMAS TENGO UN RETRY
      !myDocument.inicialOrFinal && myDocument.retry === true && (
        <>
          <div
            className="container text-center pt-5 mt-0"
            style={{ fontSize: "200px" }}
          >
            <h3 className="mb-0">Documentación Rechazada</h3>
            <i className="bi bi-x-circle"></i>
            <h5 className="mb-0 text-info">{myDocument.comment}</h5>
            <h4 className="mb-0">
              Revisa tus documentos e intentalo de nuevo a la brevedad
            </h4>
          </div>
        </>
      )}

      {/* ESTO SE MOSTRARA EN AMBOS CASOS, ENVIADO, O ENVIADO CON ERROR */}
      {(myDocument.inicialOrFinal || myDocument.retry === true) && (
        <div className="container">
          <form onSubmit={handleSubmitFormDocs}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Sube tu documentación (Un único PDF con la documentacion en el
                siguiente orden. Carta Compromiso descargada del SISS, Carta de
                termino)
              </label>
              <p className="text-center text-danger">
                Por el momento no se pueden subir archivos, se hace la demo con
                un archivo en crudo. Pero el formulario quedaria asi. Para
                probarlo, solo clickea en el boton de enviar doc.
              </p>
              <input className="form-control" type="file" id="formFile" />
            </div>
            {/* TENDROMOS DOS BOTONES, ENVIO POR PRIMERA VEZ Y REENVIO */}
            {!myDocument.inicialOrFinal ? (
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
      {!myDocument.inicialOrFinal && myDocument.validated === true && (
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

export default FinalDocumentationComponent;
