import axios from "axios";
import { ACTIONS } from "../constants";

const setRepos = (repos) => ({
  type: ACTIONS.SET_REPOS,
  payload: repos,
});

export const setPageNumder = (number) => ({
  type: ACTIONS.SET_PAGE_NUMBER,
  payload: number,
});

export const setPageCount = (number) => ({
  type: ACTIONS.SET_PAGE_COUNT,
  payload: number,
});

export const setFirstItem = (number) => ({
  type: ACTIONS.SET_FIRST_ITEM,
  payload: number,
});

export const setLastItem = (number) => ({
  type: ACTIONS.SET_LAST_ITEM,
  payload: number,
});

const setIsFetching = (bool) => ({
  type: ACTIONS.SET_IS_FETCHING,
  payload: bool,
});

export const getRepos = (username, perPage, pageNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(false));
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${pageNumber}`,
        {
          method: "GET",
          headers: {
            Authorization: "token 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",
          },
        }
      );
      dispatch(setRepos(response.data));
    } catch (e) {}
  };
};
