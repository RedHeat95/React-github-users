import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  isFetching: true,
};

export const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_REPOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
