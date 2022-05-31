import React from "react";

const ConstanceComponent = () => {
  return (
    <>
      <div className="container text-center pt-5" style={{ fontSize: "200px" }}>
        <i class="bi bi-award"></i>
        <h3 className="mb-0">
          Felicidades has completado tu tramite de SS.
          <br />
          <br />
          <button className="btn btn-outline-success">
            Descargar Constancia de Termino{" "}
            <i class="bi bi-file-earmark-arrow-down"></i>
          </button>
        </h3>
      </div>
    </>
  );
};

export default ConstanceComponent;
