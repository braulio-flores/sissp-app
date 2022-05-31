import React from "react";
import TitleWindow from "../ui/TitleWindow";

const FinalDocumentationComponent = () => {
  return (
    <>
      <TitleWindow
        title="Documentación Final"
        descriptionPage="Una vez concluido las horas de servicio y habiendo subido los reportes correspondientes al SISS, deberas de descargar tu carta de termino y mandarla en este apartado a la Unidad."
      />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Sube tu documentación (Un único PDF con la documentacion en el
              siguiente orden. Carta Compromiso y Carta de Termino)
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Enviar Documentación Final
          </button>
        </form>
      </div>
    </>
  );
};

export default FinalDocumentationComponent;
