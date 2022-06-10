import { types } from "../types/types";
import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";



export const setDocuments = (documents) => {
  return {
    type: types.docsSetsDocs,
    payload: documents,
  };
};


export const startRequestDocumentationClicked = (user) => {
  // AQUI SE TIENE QUE HACER EL ENVIO DE LA SOLICITUD A LA DB
  return async (dispatch) => {
    Swal.fire({
      title: "Enviando Documentación",
      text: "Estamos creando tu solicitud, por favor espera.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    const docrequestInfo = {
      boleta: user.boleta,
      doc: "https://www.ipn.mx/assets/files/escatep/docs/Servicio-Social/Guia-ss.pdf",
      validated: false,
      inicialOrFinal: true, //SI ES TRUE ES PORQUE ES DOC INICIAL
    };

    await axios
      .post(`${variables.REACT_APP_URL_API}documents/`, { ...docrequestInfo })
      .then((res) => {
        console.log(res.data.eventDB);
        dispatch(requestDocClicked(res.data.eventDB));
        Swal.fire({
          title: "Documentacion Enviada",
          text: "Se ha mandado enviado tu documento exitosamente",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((error) => {
        Swal.close();

        Swal.fire({
          title: "Documento No Enviado",
          text: error,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  // ESTE SOLO ESTA SIMULANDO LO QUE ES UNA PETICION ASINCRONA

  // DESPUES SE DEBE DE HACER UN DISPATCH PARA CAMBIAR EL ESTADO EN REDUX
};

export const requestDocClicked = (myDoc) => {
  // AQUI SE TIENE QUE HACER UN START REQUESTVALIDATION QUE LO QUE HARA SERA EL ENVIO DE LA SOLICITUD A LA DB

  return {
    type: types.docsRequestSendDocs,
    payload: myDoc,
  };
  
};
