import axios from "axios";
import { ACTIONS } from "../constants";

const setUsers = (users) => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});

export const setUsername = (username) => ({
  type: ACTIONS.SET_USERNAME,
  payload: username,
});

export const setIsSearch = (bool) => ({
  type: ACTIONS.SET_IS_SEARCH,
  payload: bool,
});

export const setIsNotFound = (bool) => ({
  type: ACTIONS.SET_IS_NOT_FOUND,
  payload: bool,
});

export const getUsers = (username) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        method: "GET",
        headers: {
          Authorization: "token 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",
        },
      }
    );
    dispatch(setUsers(response.data));
  };
};
