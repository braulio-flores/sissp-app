import { types } from "../types/types";

const inicialState = {
  session: false, 
  admin: false
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
        favoritesOpen: false,
      };
    default:
      return state;
  }
};
