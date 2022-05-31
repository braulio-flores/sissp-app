import { types } from "../types/types";
import Swal from "sweetalert2";

export const openModal = () => {
  return {
    type: types.uiOpenModal,
  };
};

export const closeModal = () => {
  return {
    type: types.uiCloseModal,
  };
};

export const openFavorites = () => {
  return {
    type: types.uiOpenFavsMenu,
  };
};

export const closeFavorites = () => {
  return {
    type: types.uiCloseFavsMenu,
  };
};

export const changeStep = (step) => {
  return {
    type: types.uiChangeStep,
    payload: step,
  };
};

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const startRequestValidationClicked = () => {
  // AQUI SE TIENE QUE HACER EL ENVIO DE LA SOLICITUD A LA DB
  return async (dispatch) => {
    Swal.fire({
      title: "Solicitando Validacion",
      text: "Estamos creando tu solicitud, por favor espera.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    await timeout(3000); //ESTO SOLO ESTA SIMULANDO EL TIEMPO QUE TARDARIA EN SOLICITAR LA VALIDASC ION EN LA DB

    console.log("requested");

    dispatch(requestValidationClicked());

    Swal.close();

    Swal.fire({
      title: "Solicitud Creada",
      text:
        "Se ha creado tu solicitiud, en breve la revisaremos y se te notificara automaticamente",
      icon: "success",
      confirmButtonText: "Confirmar",
    });
  };

  // ESTE SOLO ESTA SIMULANDO LO QUE ES UNA PETICION ASINCRONA

  // DESPUES SE DEBE DE HACER UN DISPATCH PARA CAMBIAR EL ESTADO EN REDUX
};

export const requestValidationClicked = () => {
  // AQUI SE TIENE QUE HACER UN START REQUESTVALIDATION QUE LO QUE HARA SERA EL ENVIO DE LA SOLICITUD A LA DB

  return {
    type: types.uiRequestValidation,
  };
};
