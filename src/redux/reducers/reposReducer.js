import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  perPage: 4,
  pageNumber: 1,
  pageCount: 0,
  firstItem: 0,
  lastItem: 0,
  isFetching: false,
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

    case ACTIONS.SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };

    case ACTIONS.SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };

    case ACTIONS.SET_FIRST_ITEM:
      return {
        ...state,
        firstItem: action.payload,
      };

    case ACTIONS.SET_LAST_ITEM:
      return {
        ...state,
        lastItem: action.payload,
      };

    default:
      return state;
  }
};
