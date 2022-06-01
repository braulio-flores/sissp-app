
import { types } from "../types/types";



const inicialState = {
  session: false,
  admin: false,
  steep: 7,
  maxSteep: 4,
  validationPage: {
    statusRequested: false,
  },
  modalOpen: false,
  activeStudent: {},
  activeProfessor: {},
  typeOfModal: 1,
  admionMode: true,
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiChangeStep:
      return {
        ...state,
        steep: action.payload,
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
