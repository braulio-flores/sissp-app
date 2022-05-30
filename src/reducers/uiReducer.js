import { types } from "../types/types";

const inicialState = {
  session: false,
  admin: false,
  steep: 3,
  maxSteep: 3
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
      console.log(action.payload);
      return {
        ...state,
        steep: action.payload
      };
    default:
      return state;
  }
};
