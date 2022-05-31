import React from "react";
import TitleWindow from "../ui/TitleWindow";

const InicialDocumentationComponent = () => {
  return (
    <>
      <TitleWindow
        title="Documentación Inicial"
        descriptionPage="Una vez validado por tu Unidad y por tu prestatario, deberas descargar la carta compromiso que el SISS te proporciona, y sin firmarla deberas de unirla en un solo pdf junto con tu CURP, Constancia de creditos vigente y Constancia de Vigencia de Servicio Médico en ese orden, posteriormente tendras que subir el PDF en este mismo apartado."
      />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Sube tu documentación (Un único PDF con la documentacion en el
              siguiente orden. Carta Compromiso descargada del SISS, CURP,
              Constancia de Creditos Vigente, Constancia de Vigencia del
              Servicio Médico)
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Enviar Documentación
          </button>
        </form>
      </div>
    </>
  );
};

export default InicialDocumentationComponent;
