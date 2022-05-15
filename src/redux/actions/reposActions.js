import axios from "axios";
import { ACTIONS } from "../constants";
import { setIsNotFound } from "./usersActions";

const setRepos = (repos) => ({
  type: ACTIONS.SET_REPOS,
  payload: repos,
});

const setIsFetching = (bool) => ({
  type: ACTIONS.SET_IS_FETCHING,
  payload: bool,
});

export const setCurrentPage = (page) => ({
  type: ACTIONS.SET_CURRENT_PAGE,
  payload: page,
});

export const getRepos = (username, perPage, currentPage) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${currentPage}`,
      {
        method: "GET",
        headers: {
          Authorization: "token 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",
        },
      }
    );
    dispatch(setRepos(response.data));
  };
};
