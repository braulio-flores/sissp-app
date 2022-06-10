import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

export const getValidations = async () => {

  // Swal.fire({
  //   title: "Conectando",
  //   text: "Cargando Validaciones.",
  //   allowEscapeKey: false,
  //   showConfirmButton: false,
  //   allowOutsideClick: false,

  //   onBeforeOpen: () => {
  //     Swal.showLoading();
  //   },
  // });

  await axios
    .get(`${variables.REACT_APP_URL_API}validations/`)
    .then((res) => {
      const validations = res.data;
      // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      // Swal.close();
    //   console.log(questions);
      return validations;
    })
    .then(res=>{
        localStorage.setItem('validations', JSON.stringify(res.validations));
        return {};
    })
    .catch((error) => {
        localStorage.removeItem('validations');

      Swal.close();
      Swal.fire({
        title: "Error Validations",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};


export const updateValidation  = async (whoBoleta, validation) => {
    // Swal.fire({
    //   title: "Actualizando Validacion",
    //   text: "Actualizando Información.",
    //   allowEscapeKey: false,
    //   showConfirmButton: false,
    //   allowOutsideClick: false,
  
    //   onBeforeOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
  
    await axios
      .put(`${variables.REACT_APP_URL_API}validations/${whoBoleta}`, {...validation})
      .then((res) => {
          // console.log(res);
        const valiNew = res.data;
        // Swal.close();
        return valiNew;
      })
      .then(res=>{
        // console.log(res);
      })
      .catch((error) => {
          localStorage.removeItem('questions');
        console.log(error);
        // Swal.close();
        Swal.fire({
          title: "Error Al Validar",
          text: error,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
