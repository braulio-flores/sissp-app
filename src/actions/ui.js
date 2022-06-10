import { types } from "../types/types";
import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";
import { requestDocClicked } from "./docs";

export const closeSession = () => {
  localStorage.setItem("admin", false);
  localStorage.removeItem("user");
  localStorage.clear();
  return {
    type: types.uiCloseSession,
  };
};

export const startLogin = (boleta, pass) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Iniciando Sesion",
      text: "Estamos validando tu solicitud, por favor espera.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    // ANTES MOSTRAMOS UNA ALERTA DE CARGANDO
    // DESPUES HACEMOS EL PROCEDIMIENTO DE LOGGEO

    await axios
      .get(`${variables.REACT_APP_URL_API}users/${boleta}/`)
      .then((res) => {
        const user = res.data;
        // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
        dispatch(reviewPass(user, pass));
      })
      .catch((error) => {
        console.log();
        Swal.close();
        Swal.fire({
          title: "Error Loggin",
          text: error.response.data.msg,
          icon: "error",
          confirmButtonText: "ok",
        });
      });

    // setTimeout(() => {
    //   dispatch(login(123, "pedro"));
    // }, 3500);
  };
};

export const reviewPass = ({ student }, pass) => {
  return async (dispatch) => {
    console.log("res", student.password);
    console.log("pass", pass);

    if (student.boleta === 1 && pass === "admin") {
      // AQUI SE VA A DISPARAR EL ADMIN MODE ACTIVADO Y EL INICIO DE SESION
      Swal.close();
      dispatch(setAdminMode(true));
      dispatch(setActiveSession(student));
      localStorage.setItem("admin", "true");
    } else if (student.password === pass) {
      // AQUI SOLO SE VA A DISPARAR EL INICIO DE SESION
      Swal.close();
      dispatch(setActiveSession(student));
    } else {
      Swal.close();
      Swal.fire({
        title: "Error Loggin",
        text: "Usuario o contraseña Incorrectos",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

export const setAdminMode = (modeAd) => {
  return {
    type: types.uiAdminMode,
    payload: modeAd,
  };
};

export const setActiveSession = (user) => {
  localStorage.setItem("user", JSON.stringify(user));

  const userCurrent = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : false;
  const validations = JSON.parse(localStorage.getItem("validations"))
    ? JSON.parse(localStorage.getItem("validations"))
    : false;
  const documents = JSON.parse(localStorage.getItem("documents"))
    ? JSON.parse(localStorage.getItem("documents"))
    : false;

  return async (dispatch) => {
    // ESTE RETURN VA A TRAERME A TODOS LOS USUARIOS Y ME LOS VA A GUARDAR EN EL LOCAL Storage, PERO ANTES DE TODO
    // LO QUE QUIERO HACER ES GUARDAR MY VALIDATION EN MI REDUX CADA QUE SE ABRE Y CIERRA sessionStorage, LO HACE CADA QUE
    // SE CARGA LA PAGINA PERO NO CADA QUE SE ABRE Y CIERRA SESION
    // console.log("userCurrent", userCurrent);
    // console.log("validations", validations);
    dispatch(
      requestValidationClicked(
        !!userCurrent && !!validations
          ? validations.find(
              (validation) => validation.boleta === userCurrent.boleta
            )
          : false
      )
    );
    dispatch(
      requestDocClicked(
        !!userCurrent && !!documents
          ? documents.find(
              (document) => document.boleta === userCurrent.boleta && document.inicialOrFinal === true
            )
          : false
      )
    );

    Swal.fire({
      title: "Recuperando Data",
      text: "Estamos validando tu solicitud, por favor espera.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    await axios
      .get(`${variables.REACT_APP_URL_API}users/`)
      .then((res) => {
        Swal.close();
        const user = res.data;
        return user;
        // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      })
      .then((res) => {
        localStorage.setItem("allUsers", JSON.stringify(res.student));
        dispatch(setUsers(user));
      })
      .catch((error) => {
        console.log();
        Swal.close();
        Swal.fire({
          title: "Error Loggin",
          text: error.response.data.msg,
          icon: "error",
          confirmButtonText: "ok",
        });
      });

    // setTimeout(() => {
    //   dispatch(login(123, "pedro"));
    // }, 3500);
  };
  // return {
  //   type: types.uiActiveSession,
  //   payload: user,
  // };
};

export const setUsers = (user) => {
  return {
    type: types.uiActiveSession,
    payload: user,
  };
};

export const setValidations = (validations) => {
  return {
    type: types.uiUpdateValidations,
    payload: validations,
  };
};

export const setActiveProfessor = (professor) => {
  return {
    type: types.uiSetActiveProfessor,
    payload: professor,
  };
};

export const deleteActiveProfessor = () => {
  return {
    type: types.uiDeleteActiveProfessor,
  };
};

export const setTypeOfModal = (modal) => {
  return {
    type: types.uiSetTypeOfModal,
    payload: modal,
  };
};

export const setActiveStudent = (studentValue) => {
  return {
    type: types.uiSetActiveStudent,
    payload: studentValue,
  };
};

export const deleteActiveStudent = () => {
  return {
    type: types.uiDeleteActiveStudent,
  };
};

export const openModalAction = () => {
  return {
    type: types.uiOpenModal,
  };
};

export const closeModalAction = () => {
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

export const changeMaxStep = (step) => {
  return {
    type: types.uiChangeMaxStep,
    payload: step,
  };
};

export const startRequestValidationClicked = (user) => {
  // AQUI SE TIENE QUE HACER EL ENVIO DE LA SOLICITUD A LA DB
  return async (dispatch) => {
    Swal.fire({
      title: "Solicitando Validacion",
      text: "Estamos creando tu solicitud, por favor espera.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      // onBeforeOpen: () => {
      //   Swal.showLoading();
      // },
    });

    const validationInfo = {
      boleta: user.boleta,
      responsible: "Jose Luis López Gotya",
      validated: false,
    };

    await axios
      .post(`${variables.REACT_APP_URL_API}validations/`, { ...validationInfo })
      .then((res) => {
        console.log(res.data.eventDB);
        // Swal.close();
        dispatch(requestValidationClicked(res.data.eventDB));

        Swal.fire({
          title: "Validacion Solicitada",
          text: "Se ha mandado tu solicitud de validacion exitosamente",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((error) => {
        Swal.close();

        Swal.fire({
          title: "Validacion Fallida",
          text: error,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  // ESTE SOLO ESTA SIMULANDO LO QUE ES UNA PETICION ASINCRONA

  // DESPUES SE DEBE DE HACER UN DISPATCH PARA CAMBIAR EL ESTADO EN REDUX
};

export const requestValidationClicked = (myValidation) => {
  // AQUI SE TIENE QUE HACER UN START REQUESTVALIDATION QUE LO QUE HARA SERA EL ENVIO DE LA SOLICITUD A LA DB

  return {
    type: types.uiRequestValidation,
    payload: myValidation,
  };
};
