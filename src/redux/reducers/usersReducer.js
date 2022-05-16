import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  username: "",
  isSearch: false,
  isNotFound: false,
  totalCount: 0,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        items: action.payload,
        totalCount: action.payload.public_repos,
      };

    case ACTIONS.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case ACTIONS.SET_IS_SEARCH:
      return {
        ...state,
        isSearch: action.payload,
      };

    case ACTIONS.SET_IS_NOT_FOUND:
      return {
        ...state,
        isNotFound: action.payload,
      };

    default:
      return state;
  }
};
