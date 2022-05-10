import axios from "axios";
import { ACTIONS } from "../constants";

const setRepos = (repos) => ({
  type: ACTIONS.SET_REPOS,
  payload: repos,
});

const setIsFetching = (bool) => ({
  type: ACTIONS.SET_IS_FETCHING,
  payload: bool,
});

export const getRepos = (username) => {
  return async (dispatch) => {
    dispatch(setIsFetching(false));
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?type=all&per_page=100&page=1`
    );
    dispatch(setRepos(response.data));
  };
};
