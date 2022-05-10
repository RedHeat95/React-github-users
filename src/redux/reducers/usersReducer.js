import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  isSearch: false,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        items: action.payload,
        isSearch: true,
      };

    case ACTIONS.SET_IS_SEARCH:
      return {
        ...state,
        isSearch: action.payload,
      };

    default:
      return state;
  }
};
