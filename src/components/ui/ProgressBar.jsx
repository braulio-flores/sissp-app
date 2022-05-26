import React from "react";
import './progressBar.css';

const ProgressBar = () => {
  return (
    <div className="container m-5">
      <ul className="progressbar">
        <li className="active"><p>INSTRUCCIONES INICIALES</p></li>
        <li className="active"><p>REQUISITOS PREVIOS</p></li>
        <li className="active"><p>VALIDACION SISS</p></li>
        <li className="active"><p>DOCUMENTACION INICIAL</p></li>
        <li><p>INDICACIONES MEDIAS</p></li>
        <li><p>DOCUMENTACION FINAL</p></li>
        <li><p>CONSTANCIA DE SERVICIO SOCIAL</p></li>
      </ul>
    </div>
  );
};

export default ProgressBar;
