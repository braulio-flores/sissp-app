import React from "react";
import TitleWindow from "../ui/TitleWindow";

const EnlacesComponent = () => {
  return (
    <>
      <TitleWindow
        title="Enlaces de Referencia"
        descriptionPage="Esta pagina solo es una version demo y de apoyo a los estudiantes y a la Gestion, sin embargo es de vital importancia mencionar que esta pagina NO es un sitio OFICIAL, por lo que les sugerimos consultar las fuentes que el IPN y la UNIDAD misma ofrecen."
        mt="mt-0"
      />
      <div className="container">
        <div class="row">
          <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              >
                SISS
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
                SS UPIICSA
              </a>
              {/* <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Messages
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Settings
              </a> */}
            </div>
          </div>
          <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                Este es el SISTEMA que el IPN ofrece para el registro de los
                Estudiantes, ademas de contar con informacion, apartados y guias
                muy utiles que apoyan en el proceso del tramite, y son en los
                cuales nos hemos basado para el desarrollo de este sistema.
                <br />
                <br />
                Puedes visitar el sitio consultando el siguiente enlace{" "}
                <a
                  href="https://serviciosocial.ipn.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SISS Oficial
                </a>
              </div>
              <div
                class="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                En cuanto a la Gestión del Tramite dentro de la Unidad tambien
                existe una pagiuna que comparte los pasos y los procesimientos,
                ademas de complementar y sintetizar el contenido que el SISS
                proporciona.
                <br />
                <br />
                Puedes visitar el sitio consultando el siguiente enlace{" "}
                <a
                  href="https://www.upiicsa.ipn.mx/estudiantes/servicio-social.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SS UPIICSA Oficial
                </a>
              </div>
              {/* <div
                class="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                ...
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlacesComponent;
