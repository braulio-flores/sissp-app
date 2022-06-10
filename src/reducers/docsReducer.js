import { types } from "../types/types";

// const user = JSON.parse(localStorage.getItem("user"));

const userCurrent = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : false;
const documents = JSON.parse(localStorage.getItem("documents"))
  ? JSON.parse(localStorage.getItem("documents"))
  : false;

const haveDocument =
  userCurrent && documents
    ? documents.find(
        (document) =>
          document.boleta === userCurrent.boleta &&
          document.inicialOrFinal === true
      )
    : false;

// SI ES UNDEFINED PUEDE SIGBIFICAR QUE YA ESTA VALIDADO

// const haveValidationF = haveDocument
//   ? haveDocument.find((docu) => docu.boleta === userCurrent.boleta)
//   : false;

const inicialState = {
  myDocument: haveDocument,
  documents: documents,
};

export const docsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.docsRequestSendDocs:
      return {
        ...state,
        myDocument: action.payload,
      };
    case types.docsSetsDocs:
      return {
        ...state,
        documents: action.payload,
      };
    default:
      return state;
  }
};
