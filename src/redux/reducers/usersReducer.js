import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
