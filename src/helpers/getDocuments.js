import Swal from "sweetalert2";
import axios from "axios";
import { variables } from "../variables/variables";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

export const getDocuments = async () => {
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
    .get(`${variables.REACT_APP_URL_API}documents/`)
    .then((res) => {
      const documents = res.data;
      // SI SI ESTA EN LA BASE DE DATOS VAMOS A MANDARLO AL ACTION DE REVISAR PASS
      // Swal.close();
      //   console.log(questions);
      return documents;
    })
    .then((res) => {
      localStorage.setItem("documents", JSON.stringify(res.docs));
      return {};
    })
    .catch((error) => {
      localStorage.removeItem("documents");

      Swal.close();
      Swal.fire({
        title: "Error Al Obtener Los Documentos",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};

export const updateDocumentation = async (whoBoleta, documentation) => {
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
    .put(`${variables.REACT_APP_URL_API}documents/${whoBoleta}`, {
      ...documentation,
    })
    .then((res) => {
      // console.log(res);
      const valiNew = res.data;
      // Swal.close();
      return valiNew;
    })
    .then((res) => {
      // console.log(res);
      getDocuments();
    })
    .catch((error) => {
      console.log(error);
      // Swal.close();
      Swal.fire({
        title: "Error Al Actualizar El Documento",
        text: error,
        icon: "error",
        confirmButtonText: "ok",
      });
    });
};
