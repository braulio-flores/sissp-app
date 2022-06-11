import { types } from "../types/types";

// const user = JSON.parse(localStorage.getItem("user"));

const userCurrent = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : false;
const validations = JSON.parse(localStorage.getItem("validations"))
  ? JSON.parse(localStorage.getItem("validations"))
  : false;

const haveValidation =
  !!userCurrent && !!validations
    ? validations.find(
        (validation) => validation.boleta === userCurrent.boleta
      )
    : false;

// SI ES UNDEFINED PUEDE SIGBIFICAR QUE YA ESTA VALIDADO

const haveValidationF = haveValidation
  ? validations.find((validation) => validation.boleta === userCurrent.boleta)
  : false;

const inicialState = {
  session: {
    start: userCurrent ? true : false,
    user: userCurrent ? userCurrent : {},
  },
  admin: false,
  steep: userCurrent ? userCurrent.steep : 1,
  validationPage: {
    statusRequested: !!haveValidationF,
  },
  maxSteep: userCurrent ? userCurrent.steep : 1,
  modalOpen: false,
  activeStudent: {},
  activeProfessor: {},
  typeOfModal: 1,
  admionMode: JSON.parse(localStorage.getItem("admin")) ? true : false,
  myValidation: haveValidationF,
  validations: validations ? validations : {},
  docOpen: {}
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiActiveSession:
      return {
        ...state,
        session: {
          start: true,
          user: action.payload,
        },
        steep: action.payload.steep,
        maxSteep: action.payload.steep,
      };
    case types.uiCloseSession:
      return {
        ...state,
        session: {
          start: false,
          user: {},
        },
      };
    case types.uiChangeStep:
      return {
        ...state,
        steep: action.payload,
      };
    case types.uiChangeMaxStep:
      return {
        ...state,
        maxSteep: action.payload,
      };
    case types.uiRequestValidation:
      return {
        ...state,
        validationPage: {
          statusRequested: true,
        },
        myValidation: action.payload,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
        docOpen: {}
      };
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
        docOpen: action.payload
      };
    case types.uiSetActiveStudent:
      return {
        ...state,
        activeStudent: action.payload,
      };
    case types.uiDeleteActiveStudent:
      return {
        ...state,
        activeStudent: {},
      };
    case types.uiSetTypeOfModal:
      return {
        ...state,
        typeOfModal: action.payload,
      };
    case types.uiSetActiveProfessor:
      return {
        ...state,
        activeProfessor: action.payload,
      };
    case types.uiDeleteActiveProfessor:
      return {
        ...state,
        activeProfessor: {},
      };
    case types.uiAdminMode:
      return {
        ...state,
        admionMode: action.payload,
      };
    case types.uiUpdateValidations:
      return {
        ...state,
        validations: action.payload,
      };
    default:
      return state;
  }
};
