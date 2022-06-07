import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TitleWindow from "../ui/TitleWindow";
import "./FormInicialRequest.css";
import Swal from "sweetalert2";
import { updateStudentSteep } from "../../helpers/getuUsers";
import { changeMaxStep, changeStep } from "../../actions/ui";

const FormInicialRequest = () => {
  const [formSituation, setFormSituation] = useState({
    schoolarSituation: true,
    constanceSituation: true,
    nssSituation: true,
    curpSituation: true,
    mailSituation: true,
    placeSituation: true,
  });

  const {
    mailSituation,
    curpSituation,
    nssSituation,
    constanceSituation,
    schoolarSituation,
    placeSituation,
  } = formSituation;

  let valores = Object.values(formSituation);
  let isCorrect = false;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === false) {
      isCorrect = true;
    }
  }

  const dispatch = useDispatch();

  const handleInputChangeSituation = (value) => {
    setFormSituation({
      ...formSituation,
      schoolarSituation: value,
    });
  };

  const handleInputChangeConstance = (value) => {
    setFormSituation({
      ...formSituation,
      constanceSituation: value,
    });
  };

  const handleInputChangeNSS = (value) => {
    setFormSituation({
      ...formSituation,
      nssSituation: value,
    });
  };

  const handleInputChangeCURP = (value) => {
    setFormSituation({
      ...formSituation,
      curpSituation: value,
    });
  };

  const handleInputChangeMail = (value) => {
    setFormSituation({
      ...formSituation,
      mailSituation: value,
    });
  };

  const handleInputChangePlace = (value) => {
    setFormSituation({
      ...formSituation,
      placeSituation: value,
    });
  };

  const handleClickSendForm = (e) => {
    e.preventDefault();
    console.log(e);
    Swal.fire({
      title: "Requisitos Completos",
      text:
        "Ya cuentas con todos los requisitos necesarios para realizar tu tramite de SS. Ahora registrate en el sistema y solicita tu validacón en la siguiente ventana.",
      icon: "success",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStudentSteep(3);
        dispatch(changeStep(3));
        dispatch(changeMaxStep(3));
      }
    });
    // updateStudentSteep(3);
    // dispatch(changeStep(3));
    // dispatch(changeMaxStep(3));
  };

  return (
    <>
      <TitleWindow
        title="Formulario Evaluacion de Requisitos"
        descriptionPage="El presente formulario te servira de apoyo a ti como estudiante, para
          saber si cuentas con los requisitos necesarios para poder dar inicio a
          tu tramite y gestion del servicio social y asi agilizar este mismo."
      />
      <div className="container mt-0">
        <form onSubmit={handleClickSendForm}>
          {/* INPUT TIPO CHECK PARA VER QUE TIPO DE ALUMNO ERES */}
          <label
            htmlFor="staticEmail"
            className="col-sm-2 col-form-label bold mt-2 mb-2"
          >
            <b>Situacion Academica</b>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeSituation(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Inscrito
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                required
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeSituation(true)}
                name="inlineCheckbox1"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Egresado
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineCheckbox1"
                value="option2"
                onChange={() => handleInputChangeSituation(false)}
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Otra
              </label>
            </div>
            {!schoolarSituation && (
              <p className="text-danger">
                Necesitas estar inscrito o ser egresado para poder comenzar tu
                servicio social*
              </p>
            )}
          </div>

          {/* DEPENDIENDO DE SI ES EGRESADO O ESTA INSCRITO LE PREGUNTAMOS SI TIENE CONSTANCIA, BOLETA GLOBAL O CARTA PASANTE */}
          <label
            htmlFor="staticEmail"
            className="col-sm-11 col-form-label bold mt-2 mb-2"
          >
            <b>
              ¿Cuentas con tu CONSTANCIA DE CREDITOS? (En caso de ser egresado
              es posible proporcionar tu CARTA DE PASANTE o una BOLETA
              CERTIFICADA con expedicion no mayor a tres meses)
            </b>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeConstance(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Si
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeConstance(false)}
                name="inlineCheckbox1"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                No
              </label>
            </div>
            {!constanceSituation && (
              <>
                <p className="text-danger mb-0 mt-1">
                  La constancia de creditos es un documento necesario para poder
                  dar inicio a tu servicio social*
                </p>
                <p className="mt-0">
                  Puedes tramitarla en la siguiente liga:{" "}
                  <a
                    href="https://www.tramites.upiicsa.ipn.mx/Default.aspx?ReturnUrl=%2f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tramites Upiicsa
                  </a>
                </p>
              </>
            )}
          </div>

          {/* OTRO DOCUMENTO NECESARIO ES LA CONSTANCIA DE VIGENCIA DEL SERVICIO MEDICO */}
          <label
            htmlFor="staticEmail"
            className="col-sm-11 col-form-label bold mt-2 mb-2"
          >
            <b>¿Cuentas con tu CONSTANCIA DE VIGENCIA DEL SERVICIO MEDICO?</b>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeNSS(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Si
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeNSS(false)}
                name="inlineCheckbox1"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                No
              </label>
            </div>
            {!nssSituation && (
              <>
                <p className="text-danger mb-0 mt-1">
                  La constancia de vigencia de derechos del servicio medico es
                  un documento necesario para poder dar inicio a tu servicio
                  social*
                </p>
                <p className="mt-0">
                  Puedes tramitarla en la siguiente liga:{" "}
                  <a
                    href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Servicios Digitales IMMS
                  </a>
                </p>
              </>
            )}
          </div>

          {/* CURP */}
          <label
            htmlFor="staticEmail"
            className="col-sm-11 col-form-label bold mt-2 mb-2"
          >
            <b>¿Cuentas con tu CURP con expedicion no mayor a tres meses?</b>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeCURP(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Si
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeCURP(false)}
                name="inlineCheckbox1"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                No
              </label>
            </div>
            {!curpSituation && (
              <>
                <p className="text-danger mb-0 mt-1">
                  El CURP con una expedicion no mayor a tres meses es un
                  documento necesario para poder dar inicio a tu servicio
                  social*
                </p>
                <p className="mt-0">
                  Puedes consultarlo en la siguiente liga:{" "}
                  <a
                    href="https://www.gob.mx/curp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulta CURP
                  </a>
                </p>
              </>
            )}
          </div>

          {/* CORREO INSTITUCIONAL */}
          <label
            htmlFor="staticEmail"
            className="col-sm-11 col-form-label bold mt-2 mb-2"
          >
            <b>¿Cuentas con tu CORREO INSTITUCIONAL?</b>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeMail(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Si
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangeMail(false)}
                name="inlineCheckbox1"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                No
              </label>
            </div>
            {!mailSituation && (
              <>
                <p className="text-danger mb-0 mt-1">
                  Tener tu correo institucional es necesario para poder dar
                  inicio a tu servicio social*
                </p>
              </>
            )}
          </div>

          {/* INSTITUCION */}
          <label
            htmlFor="staticEmail"
            className="col-sm-11 col-form-label bold mt-2 mb-2"
          >
            <b>¿Ya sabes en donde realizaras tu servicio social?</b>
            <br />
            <p className="text-info mb-0 mt-1">
              Recuerda que es MUY importante que la Institucion u Organizacion
              este registrada con algun programa de Servicio social dentro del
              SISS para que tu servicio social pueda ser valido y no pierdas el
              tiempo.*
            </p>
            <p>
              Puedes consultar las vacantes de acuerdo con tu carrera usando el
              filtro en la siguiente liga:{" "}
              <a
                href="https://serviciosocial.ipn.mx/infoServSoc/InfoServSocListaPerfiles.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vacantes por Carrera
              </a>
            </p>
            <p>
              Es necesario que te pongas en contacto con el lugar en el que
              realizaras tu servicio y seas aceptado antes de cualquier otra
              cosa.
            </p>
            <p>
              Es posible registrar alguna institucion u organizacion para poder
              realizar el servicio en esta, solo ten en cuenta el tiempo que
              este preoceso puede llevar y recuerda que el tramite lo debe de
              realizar la persona que sera la encargada de la administracion del
              programa por parte de la empresa y debe de cumplir con los
              requisitos solicitados. El tramite se debe de realizar en la
              siguiente pagina{" "}
              <a
                href="https://serviciosocial.ipn.mx/usuario/RegistroPrestatario.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registro Prestatario (Empresa o Gobierno)
              </a>
            </p>
            <p>
              Debes de tener en cuenta las fechas estipuladas por la DESS para
              poder dar inicio a tu SS.{" "}
              <a
                href="https://www.upiicsa.ipn.mx/assets/files/upiicsa/estudiantes/servicio-social/calendario-servicio-social-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta las fechas SS 2022
              </a>
            </p>
          </label>
          <div className="form-group row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangePlace(true)}
                name="inlineCheckbox1"
                value="option1"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Si
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={() => handleInputChangePlace(false)}
                name="inlineCheckbox1"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                No
              </label>
            </div>
            {!placeSituation && (
              <>
                <p className="text-danger mb-0 mt-1">
                  Primero debes de buscar y ser aceptado en un lugar en el que
                  puedas realizar tu servicio social.*
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            className={`btn mt-5 btn-lg btn-block ${
              !isCorrect ? "btn-outline-primary" : "btn-outline-secondary"
            }`}
            disabled={isCorrect}
          >
            Verificar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormInicialRequest;
