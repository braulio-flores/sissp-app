import { types } from "../types/types";

const inicialState = {
  session: false,
  admin: false,
  steep: 7,
  maxSteep: 4,
  validationPage: {
    statusRequested: false,
  },
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
        favoritesOpen: false,
      };
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
    default:
      return state;
  }
};
