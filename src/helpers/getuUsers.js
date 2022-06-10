import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";

const user = JSON.parse(localStorage.getItem('user'));

export const updateStudentSteep = async (steep) => {
  // Swal.fire({
  //   title: "Conectando",
  //   text: "Actualizando Informacion.",
  //   allowEscapeKey: false,
  //   showConfirmButton: false,
  //   allowOutsideClick: false,

  //   onBeforeOpen: () => {
  //     Swal.showLoading();
  //   },
  // });

  await axios
    .put(`${variables.REACT_APP_URL_API}users/${user.boleta}`, {
      ...user,
      steep: steep
    })
    .then((res) => {
      const updation = res.data;
      // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      // Swal.close();
    //   console.log(questions);
      return updation;
    })
    .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.studentUpdated));
        return {};
    })
    .catch((error) => {
      // Swal.close();
      Swal.fire({
        title: "Error Validations",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};

export const updateStudentSteepWID = async (steep, boleta, whouser) => {
  // Swal.fire({
  //   title: "Conectando",
  //   text: "Actualizando Informacion.",
  //   allowEscapeKey: false,
  //   showConfirmButton: false,
  //   allowOutsideClick: false,

  //   onBeforeOpen: () => {
  //     Swal.showLoading();
  //   },
  // });

  await axios
    .put(`${variables.REACT_APP_URL_API}users/${boleta}`, {
      ...whouser,
      steep: steep
    })
    .then((res) => {
      const updation = res.data;
      // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      // Swal.close();
    //   console.log(questions);
      return updation;
    })
    .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.studentUpdated));
        return {};
    })
    .catch((error) => {
      console.log();
      // Swal.close();
      Swal.fire({
        title: "Error Validations",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};


export const makeQuestion = async (question) => {
    // Swal.fire({
    //   title: "Creando",
    //   text: "Guardando pregunta.",
    //   allowEscapeKey: false,
    //   showConfirmButton: false,
    //   allowOutsideClick: false,
  
    //   onBeforeOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
  
    await axios
      .post(`${variables.REACT_APP_URL_API}questions/`, {...question})
      .then((res) => {
          console.log(res);
        const questions = res.data;
        // Swal.close();
        return questions;
      })
      .then(res=>{
        console.log(res);
      })
      .catch((error) => {
          localStorage.removeItem('questions');
        console.log();
        // Swal.close();
        Swal.fire({
          title: "Error Loggin",
          text: error,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
