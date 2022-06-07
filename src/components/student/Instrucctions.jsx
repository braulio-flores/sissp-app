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
import { updateStudentSteep } from "../../helpers/getuUsers";
import { useDispatch } from "react-redux";
import { changeMaxStep, changeStep } from "../../actions/ui";

const Instrucctions = () => {

  const dispatch = useDispatch();

  const handleClickPassInstructions = () =>{
    updateStudentSteep(2);
    dispatch(changeStep(2));
    dispatch(changeMaxStep(2));
  }

  return (
    <>
      <TitleWindow
        title="Instrucciones"
        descriptionPage="En este apartado encontraras las Instrucciones y Requisitos Iniciales a detalle que te permitiran iniciar con el proceso de tu servicio social, paso a paso, y una guia detallada de las plataformas que utilizaras a lo largo de este tramite."
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
                1. Validar tu Situacion Escolar
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lo primero que debes de saber es que para poder realizar tu
                servicio social debes de estar inscrito y contar con al menos el
                80% de los creditos cubiertos, o ser egresado. De otra manera no
                puedes realizar tu servicio social.
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

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseF"
                aria-expanded="false"
                aria-controls="collapseF"
              >
                4. Tipo de SS Tradicional
              </button>
            </h2>
            <div
              id="collapseF"
              className="accordion-collapse collapse"
              aria-labelledby="headingF"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                En este caso abordaremos el proceso del tipo de servicio social
                "tradicional", ya que que como se comento, es el mas común. Si
                vas a realizar tu servicio social en alguna dependencia de los
                sectores público, social, privado, o bien, dentro del propio
                Instituto Politécnico Nacional, este es el tipo de SS que te
                corresponde.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                5. Revisar Vacantes
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Es muy importante mencionar que para que tu SS sea valido, debes
                de realizarlo en alguna institucion que cuente con un programa
                de SS registrado en el IPN y que este, esté asignado a tu
                escuela y carrera. Ademas de que este programa debe de tener
                vacantes disponibles para que tu puedas ingresar.{" "}
                <a
                  href="https://serviciosocial.ipn.mx/infoServSoc/InfoServSocListaPerfiles.do"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar Vacantes Disponibles Por Carrera y Unidad
                </a>{" "}
                <br />
                Aqui debes de usar el filtro que se presenta, en donde deberas
                de poner tu Nivel, Area y Carrera.
                <br />
                <br />
                <img
                  width={450}
                  src={filters}
                  alt="Filtros del SISS para consultar vacantes disponibles"
                />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                6. Contactar Prestatario
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Una vez dentro de las vacantes, podras revisar la informacion
                individual de cada uno de los prestatarios incluyendo medios de
                contacto. Es tu responsabilidad contactar a cada prestatario y
                gestionar tu integracion a dicha institucion.
                <br />
                <br />
                <img
                  width={450}
                  src={medios}
                  alt="Ejemplo medios de comunicación de prestatario SS IPN"
                />
                <br />
                <br />
                Tambien puedes realziar tu SS dentro de la UPIICSA. Se acepta el
                registro de Servicio Social con Profesores de tiempo completo 40
                horas y en Jefaturas de Academias o Departamentos. En el caso de
                realizar el servicio en la UPIICSA, deberás enviar al correo de
                servicio social nombre completo, boleta y nombre del responsable
                directo (tú deberás ponerte en contacto con los profesores,
                jefes de academia o jefes de departamento para verificar la
                disponibilidad, únicamente si vas a realizar el servicio social
                en UPIICSA) para corroborar si el responsable aún cuenta con
                espacios disponibles.
                <br />
                (Aqui se pretende implementar ademas una lista de profesores con
                su disponibilidad).{" "}
                <Link to="/index/professors">
                  Consultar Profesores Interesados y con Disponibilidad
                </Link>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                7. Evaluar Prerequisitos Completos
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                En este mismo sistema te ofrecemos un formulario que debes de
                completar y que te ayudara a verificar que efectivamente cuentas
                con todos los requisitos para comenzar tu proceso, evitando que
                tu proceso se retrase.
                <br />
                <br />
                <img
                  width={450}
                  src={formRequestImg}
                  alt="Pantalla de Formulario del sistema"
                />
                <br />
                <button
                  type="button"
                  className="btn mt-5 btn-lg btn-block btn-outline-success"
                >
                  Realizar Evaluacion de Requisitos
                </button>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEigth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEigth"
                aria-expanded="false"
                aria-controls="collapseEigth"
              >
                8. Realizar Preregistro en el SISS
              </button>
            </h2>
            <div
              id="collapseEigth"
              className="accordion-collapse collapse"
              aria-labelledby="headingEigth"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cuando estes seguro de que cuentes con todos los requisitos
                previamente mencionados y hayas realizado tu evaluacion de
                documentos, puedes proceder a realizar tu registro en el SISS.{" "}
                <a href="https://serviciosocial.ipn.mx/accion/AceptaPrerregistroPrestadorSS.do">
                  (Realizar Preregistro en SISS)
                </a>
                <br />
                <br />
                <strong>Aceptar el concentimiento</strong>
                <br />
                <img
                  width={450}
                  src={concentimeintoImg}
                  alt="Pantalla de Concentimiento SISS"
                />
                <br />
                <br />
                <strong>Seleccionar el tipo de SS tradicional</strong>
                <br />
                <img width={450} src={sstype} alt="Pantalla tipos de SS" />
                <br />
                <br />
                <strong>
                  Completar el formulario de preregistro con tu Información
                </strong>
                <br />
                <img
                  width={450}
                  src={preregistroImagen}
                  alt="Pantalla de Formulario de preregistro SISS"
                />
                <br />
                *Sólo para la los programas a distancia, el horario que deberás
                registrar en el SISS es de 8:00 a 12:00 hrs. de lunes a viernes,
                sin importar el horario en el que lo realicen. Para los
                programas presenciales, el horario que deberás registrar es el
                que te indique tu prestatario.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                9. Solicitar Validacion en el SISS por parte de la Unidad
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Una vez realizado tu preregistro, en este mismo sistema podras
                solicitar la validación de tu preregistro. Se te realizara una
                pregunta de verificacion solo para validar que efectivamente ya
                realizaste tu pregunta y llegaste a la vista en la que el SISS
                te indica que solicites tu validación. <br />
                <br />
                <img
                  width={450}
                  src={validationRequest}
                  alt="Pantalla de Solicitud de Validación"
                />
                <br />
                <br />
                <strong>
                  Se te informara que tu solicitud fue creada y quedaras a la
                  espera de ser validado
                </strong>
                <br />
                Se te informara de forma automatica cuando tu validacion haya
                sido revisada, y el estatus de esta misma, sea validado o con
                detalles a corregir.
                <br />
                <img
                  width={450}
                  src={validationRequestCreated}
                  alt="Pantalla de validacion solicitada"
                />
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                10. Solicitar Validacion por parte de tu prestatario
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Una vez que hayas recibido la notificacion de que tu validacion
                ha sido exitosa por parte de tu unidad, ahora debes de solicitar
                la validacion de tu preregistro por parte de tu prestatario. Tu
                prestatario debera de ingresar al apartado en donde se encuntran
                las solicitudes de ingreso, debera revisar tu infomacion y en
                caso de estar de acuerdo, debera de validar tu registro.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                11. Descargar Carta Compromiso SISS
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Una vez teniendo las dos validaciones, por parte de tu unidad y
                por parte de tu prestatario, podras descargar tu carta
                compromiso, la cual deberas descargar y sin ninguna firma
                posteriormente enviar junto con tu demas documentación.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwelve">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                12. Envio de Documentacion
              </button>
            </h2>
            <div
              id="collapseTwelve"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwelve"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                En este mismo sistema, en el siguiente paso despues de tu
                validacion, deberas de subir un pdf con todos los documentos que
                se te han solicitado, incluytendo la carta compromiso que acabas
                de descargar siguiendo el siguiente orden. Carta Compromiso,
                CURP, Constancia de Creditos Vigente, Constancia Vigente de
                Servicio Medico.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThirdteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirdteen"
                aria-expanded="false"
                aria-controls="collapseThirdteen"
              >
                13. Activación de cuenta SISS
              </button>
            </h2>
            <div
              id="collapseThirdteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingThirdteen"
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
        </div>
        <button
          type="button"
          className="btn mt-5 btn-lg btn-block btn-outline-success"
          onClick={handleClickPassInstructions}
        >
          Completar Instrucciones Iniciales y Realizar Evaluacion de
          Requerimientos
        </button>
      </div>
    </>
  );
};

export default Instrucctions;
