import { types } from "../types/types";

// const user = JSON.parse(localStorage.getItem("user"));

const userCurrent = JSON.parse(localStorage.getItem("user"));
const validations = JSON.parse(localStorage.getItem("validations"));

const haveValidation = validations.find(
  (validation) =>
    validation.boleta === userCurrent.boleta && validation.validated === false
);
console.log(haveValidation);

const inicialState = {
  session: {
    start: userCurrent ? true : false,
    user: userCurrent ? userCurrent : {},
  },
  admin: false,
  steep: userCurrent ? userCurrent.steep : 1,
  maxSteep: userCurrent ? userCurrent.steep : 1,
  validationPage: {
    statusRequested: !!haveValidation,
  },
  modalOpen: false,
  activeStudent: {},
  activeProfessor: {},
  typeOfModal: 1,
  admionMode: localStorage.getItem("user") ? true : false,
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
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
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
    default:
      return state;
  }
};
