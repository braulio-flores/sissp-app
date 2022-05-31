import React from "react";
import TitleWindow from "../ui/TitleWindow";
import filters from "../../resources/images/filters.png";
import medios from "../../resources/images/medios.png";
import formRequestImg from "../../resources/images/formRequest.png";
import concentimeintoImg from "../../resources/images/concentimiento.png";
import sstype from "../../resources/images/sstype.png";
import preregistroImagen from "../../resources/images/preregistroForm.png";
import validationRequest from "../../resources/images/validationRequest1.png";
import validationRequestCreated from "../../resources/images/validationRequestCreated.png";
import { Link } from "react-router-dom";

const MiddleInstrucctions = () => {
  return (
    <>
      <TitleWindow
        title="Instrucciones Despues del Envio de Documentos"
        descriptionPage="En este apartado encontraras las Instrucciones y Requisitos que necesitas completar posterior al proceso inicial, que consta del registro en el SISS, la validacion de tu preregistro y el envio de documentación."
      />
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                1. Envio de Reportes
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                La cuenta del SISS se activará durante el periodo del 4° reporte
                mensual para que puedas subir los mismos. Debes descargar los
                formatos de reporte semanal, reporte mensual, (no es necesario
                colocar el número de registro) y lista de asistencia para ser
                llenados y subidos al SISS, (solo el responsable directo los
                podrá validar, si alguna otra persona los valida serán
                eliminados y podría quedar invalidado el servicio).
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Documentacion Necesaria
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Se debe de contar con cierta documentacion que se utilizara a lo
                laergo del proceso para poder realizar el tramite. Asegurate de
                contar con toda la documentacion para evitar retrasos.
                <br />
                <br />
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>CONSTANCIA DE CREDITOS </strong> (En caso de ser
                    egresado es posible proporcionar tu CARTA DE PASANTE o una
                    BOLETA CERTIFICADA con expedicion no mayor a tres meses)
                    <p className="mt-0">
                      En caso de no contar con este documento puedes tramitarlo
                      en la siguiente liga:{" "}
                      <a
                        href="https://www.tramites.upiicsa.ipn.mx/Default.aspx?ReturnUrl=%2f"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tramites Upiicsa
                      </a>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>CONSTANCIA DE VIGENCIA DEL SERVICIO MEDICO </strong>
                    <p className="mt-0">
                      En caso de contar con este documento puedes tramitarlo en
                      la siguiente liga:{" "}
                      <a
                        href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Servicios Digitales IMMS
                      </a>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>CURP ACTUALIZADO </strong>
                    <p className="mt-0">
                      Si no cuentas con tu CURP puedes consultarlo en la
                      siguiente liga:{" "}
                      <a
                        href="https://www.gob.mx/curp/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consulta CURP
                      </a>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>CORREO INSTITUCIONAL </strong>
                    <p className="mt-0">
                      Si no cuentas con tu correo institucional deberas de
                      ponerte en contacto con tu unidad para poder generalo o
                      recuperalo:
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Tipo de Servicio Social
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Esisten diferentes tipos de servicio social (Tradicional,
                Trabajador al Servicio del Estado, Artículo 91, Servicio Social
                por Artículo 52, Prestadores del Área de la Salud). El mas comun
                es el tradicional, sin embargo, revisa cada uno de estos a
                detalle en la siguiente liga y selecciona el que mas se adapte a
                tu situacion.{" "}
                <a
                  href="https://serviciosocial.ipn.mx/accion/AceptaPrerregistroPrestadorSS.do"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tipos de Servicio Social
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn mt-5 btn-lg btn-block btn-outline-success"
        >
          Completar Instrucciones Iniciales y Realizar Evaluacion de
          Requerimientos
        </button>
      </div>
    </>
  );
};

export default MiddleInstrucctions;
