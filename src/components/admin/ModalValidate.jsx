import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalAction,
  deleteActiveProfessor,
  deleteActiveStudent,
  setValidations,
} from "../../actions/ui";
import { updateStudentSteepWID } from "../../helpers/getuUsers";
import { getValidations, updateValidation } from "../../helpers/getValidations";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { getDocuments, updateDocumentation } from "../../helpers/getDocuments";
import { setDocuments } from "../../actions/docs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalValidate = () => {
  const dispatch = useDispatch();
  const {
    modalOpen,
    activeStudent: a,
    typeOfModal,
    activeProfessor: ap,
  } = useSelector((data) => data.ui);

  const { valuesForm, handleInputChange, reset, updateValues } = useForm({
    inputName: "",
    inputAcademy: "",
    inputMail: "",
    inputNumber: "",
    inputVacants: "",
  });

  const allUsers = JSON.parse(localStorage.getItem("allUsers"));

  const {
    inputName,
    inputAcademy,
    inputMail,
    inputNumber,
    inputVacants,
  } = valuesForm;

  //   function openModal() {}

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    updateValues({
      inputName: !(ap.name == null) ? ap.name : "",
      inputAcademy: !(ap.name == null) ? ap.academy : "",
      inputMail: !(ap.name == null) ? ap.contact.mail : "",
      inputNumber: !(ap.name == null) ? ap.contact.number : "",
      inputVacants: !(ap.name == null) ? ap.vacants : "",
    });
  }

  function closeModal() {
    dispatch(closeModalAction());
    dispatch(deleteActiveStudent());
    dispatch(deleteActiveProfessor());
  }

  const selectorOfModal = () => {
    switch (typeOfModal) {
      case 1:
        return contentValidation();
      case 2:
        return contentInicialDoc();
      case 3:
        return contentEditProfessor();
      default:
        break;
    }
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();
    reset();
    console.log("mandando el primer form");
  };

  // METODOS PARA VALIDAR
  const handleConfirmValidation = (a) => {
    const activeU = allUsers.find((data) => data.boleta === a.boleta);

    updateStudentSteepWID(4, a.boleta, activeU);
    updateValidation(a.boleta, {
      boleta: a.boleta,
      responsible: a.responsible,
      validated: true,
      comment: notesInput,
      retry: false,
    });

    Swal.fire({
      title: "Alumno Validado",
      text: `Se ha validado exitosamente al alumno con boleta ${a.boleta}`,
      icon: "success",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(closeModalAction());
      }
    });

    getValidations();
    dispatch(setValidations(JSON.parse(localStorage.getItem("validations"))));
  };

  const handleNoValidation = (a) => {
    updateValidation(a.boleta, {
      boleta: a.boleta,
      responsible: a.responsible,
      validated: false,
      comment: notesInput,
      retry: true,
    });

    Swal.fire({
      title: "Alumno No Validado",
      text: `Se ha denegado la validacion al alumno con boleta ${a.boleta}. Se le notificara para que mande de nuevo su validación cuando sea correcta su información`,
      icon: "error",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(closeModalAction());
      }
    });
    getValidations();
    dispatch(setValidations(JSON.parse(localStorage.getItem("validations"))));
  };
  // METODOS PARA VALIDAR DOC
  const handleConfirmDoc = (a) => {
    const activeU = allUsers.find((data) => data.boleta === a.boleta);

    updateStudentSteepWID(5, a.boleta, activeU);
    updateDocumentation(a.boleta, {
      boleta: a.boleta,
      doc: a.doc,
      validated: true,
      comment: notesInput,
      retry: false,
      inicialOrFinal: true,
    });

    Swal.fire({
      title: "Documento Validado",
      text: `Se ha validado exitosamente el documento del alumno con boleta ${a.boleta}`,
      icon: "success",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setDocuments(JSON.parse(localStorage.getItem("documents"))));
        dispatch(closeModalAction());
      }
    });
  };

  const handleRegetDoc = (a) => {
    updateValidation(a.boleta, {
      boleta: a.boleta,
      responsible: a.responsible,
      validated: false,
      comment: notesInput,
      retry: true,
    });

    Swal.fire({
      title: "Alumno No Validado",
      text: `Se ha denegado la validacion al alumno con boleta ${a.boleta}. Se le notificara para que mande de nuevo su validación cuando sea correcta su información`,
      icon: "error",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(closeModalAction());
      }
    });
    getValidations();
    dispatch(setValidations(JSON.parse(localStorage.getItem("validations"))));
  };

  const {
    valuesForm: valuesForm2,
    handleInputChange: handleInputChange2,
  } = useForm({
    notesInput: "",
  });

  const { notesInput } = valuesForm2;

  const contentEditProfessor = () => {
    return (
      <>
        <h1> {ap.name ? "Editar Profesor" : "Agregar Profesor"}</h1>
        <hr />
        <form onSubmit={handleSubmitModal}>
          <div className="form-group">
            <label>Nombre del docente</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del Profesor"
              name="inputName"
              autoComplete="off"
              value={inputName}
              onChange={handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Este funcionamiento se debe de controlar para que se puedan editar
              de forma correcta
            </small>
          </div>
          <div className="form-group">
            <label>Academia</label>
            <input
              type="text"
              className="form-control"
              placeholder="Academia"
              name="inputAcademy"
              autoComplete="off"
              value={inputAcademy}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Correo</label>
            <input
              type="mail"
              className="form-control"
              placeholder="Correo Electronico"
              name="inputMail"
              autoComplete="off"
              value={inputMail}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Numero Telefonico"
              name="inputNumber"
              autoComplete="off"
              value={inputNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Vacantes</label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              name="inputVacants"
              autoComplete="off"
              value={inputVacants}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <button type="button" className="btn btn-outline-success btn-block">
            <i className="far fa-save"></i>
            <span>
              {" "}
              Actualizar <i className="bi bi-check-circle-fill"></i>
            </span>
          </button>{" "}
          <button type="button" className="btn btn-outline-danger btn-block">
            <i className="far fa-save"></i>
            <span>
              {" "}
              Cancelar <i className="bi bi-x-lg"></i>
            </span>
          </button>{" "}
          {/* <button type="button" className="btn btn-danger btn-block">
            <i className="far fa-save"></i>
            <span>
              {" "}
              Eliminar Solicitud <i class="bi bi-x-circle-fill"></i>
            </span>
          </button> */}
        </form>
      </>
    );
  };

  const contentValidation = () => {
    return (
      <>
        <h1> Validar Estudiante </h1>
        <hr />
        <form>
          {/* <hr /> */}
          <div className="form-group">
            <label>
              <strong>Boleta: </strong>
              {a.boleta}
            </label>
            <br />
            <label>
              <strong>Nombre: </strong>
              {a.name}
            </label>
            <br />
            <label>
              <strong>Carrera: </strong>
              {a.carrera}
            </label>
            <br />
            <label>
              <strong>Responsable Directo: </strong>
              {a.responsible}
            </label>
            <br />
          </div>
          <hr />
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notesInput"
              id="notesTa"
              value={notesInput}
              onChange={handleInputChange2}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Comentario para la validación en caso de que se requiera
            </small>
          </div>
          <br />
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            onClick={() => handleConfirmValidation(a)}
          >
            <i className="far fa-save"></i>
            <span>
              {" "}
              Validar <i className="bi bi-check-circle-fill"></i>
            </span>
          </button>{" "}
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={() => handleNoValidation(a)}
          >
            <i className="far fa-save"></i>
            <span>
              {" "}
              No Validar <i className="bi bi-x-lg"></i>
            </span>
          </button>{" "}
          {/* <button type="button" className="btn btn-danger btn-block">
            <i className="far fa-save"></i>
            <span>
              {" "}
              Eliminar Solicitud <i class="bi bi-x-circle-fill"></i>
            </span>
          </button> */}
        </form>
      </>
    );
  };

  const contentInicialDoc = () => {
    return (
      <>
        <h1> Revision de Documentacion </h1>
        <hr />
        <form>
          {/* <hr /> */}
          <div className="form-group">
            <label>
              <strong>Boleta: </strong>
              {a.boleta}
            </label>
            <br />
            <label>
              <strong>Nombre: </strong>
              {a.name}
            </label>
            <br />
            <label>
              <strong>Carrera: </strong>
              {a.carrera}
            </label>
            <br />

            <br />
          </div>
          <hr />
          <small id="emailHelp" className="form-text text-muted">
            Aqui se planea que se pueda visualizar el documento del estudiamte y
            en caso de que se requiera brinda la opcion de descarga
          </small>
          <hr />
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Comentario que recibira el estudiante"
              rows="5"
              name="notes"
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Comentario para la revision de documentacion en caso de que se
              necesite.
            </small>
          </div>
          <br />
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            onClick={() => handleConfirmDoc(a)}
          >
            <i className="far fa-save"></i>
            <span>
              {" "}
              Revisión Completa <i className="bi bi-check-circle-fill"></i>
            </span>
          </button>{" "}
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={() => handleRegetDoc(a)}
          >
            <i className="far fa-save"></i>
            <span>
              {" "}
              No procede <i className="bi bi-x-lg"></i>
            </span>
          </button>{" "}
          {/* <button type="button" className="btn btn-danger btn-block">
            <i className="far fa-save"></i>
            <span>
              {" "}
              Eliminar Solicitud <i class="bi bi-x-circle-fill"></i>
            </span>
          </button> */}
        </form>
      </>
    );
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className="modal"
        overlayClassName="modal-fondo"
      >
        {selectorOfModal()}
      </Modal>
    </div>
  );
};

export default ModalValidate;
