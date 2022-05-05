import axios from "axios";
import { ACTIONS } from "../constants";

export const setRepos = (repos) => ({
  type: ACTIONS.SET_REPOS,
  payload: repos,
});

export const getRepos = (username = "gaearon") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch(setRepos(response.data));
  };
};
