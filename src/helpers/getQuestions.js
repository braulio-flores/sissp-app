import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";

export const getQuestions = async () => {
  // Swal.fire({
  //   title: "Conectando",
  //   text: "Cargando preguntas.",
  //   allowEscapeKey: false,
  //   showConfirmButton: false,
  //   allowOutsideClick: false,

  //   onBeforeOpen: () => {
  //     Swal.showLoading();
  //   },
  // });

  await axios
    .get(`${variables.REACT_APP_URL_API}questions/`)
    .then((res) => {
      const questions = res.data;
      // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      // Swal.close();
    //   console.log(questions);
      return questions;
    })
    .then(res=>{
        localStorage.setItem('questions', JSON.stringify(res.questions));
    })
    .catch((error) => {
        localStorage.removeItem('questions');
      console.log();
      Swal.close();
      Swal.fire({
        title: "Error Questions",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};


export const makeQuestion = async (question) => {
    Swal.fire({
      title: "Creando",
      text: "Guardando pregunta.",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,
  
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
  
    await axios
      .post(`${variables.REACT_APP_URL_API}questions/`, {...question})
      .then((res) => {
          console.log(res);
        const questions = res.data;
        Swal.close();
        return questions;
      })
      .then(res=>{
        console.log(res);
      })
      .catch((error) => {
          localStorage.removeItem('questions');
        console.log();
        Swal.close();
        Swal.fire({
          title: "Error Loggin",
          text: error,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
