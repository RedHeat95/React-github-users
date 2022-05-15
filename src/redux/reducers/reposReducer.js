import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 4,
};

export const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_REPOS:
      return {
        ...state,
        items: action.payload,
        isFetching: true,
      };

    case ACTIONS.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
