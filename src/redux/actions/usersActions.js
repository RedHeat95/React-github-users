import axios from "axios";
import { ACTIONS } from "../constants";

const setUsers = (users) => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});

export const setUsername = (string) => ({
  type: ACTIONS.SET_USERNAME,
  payload: string,
});

export const setIsNotFound = (bool) => ({
  type: ACTIONS.SET_IS_NOT_FOUND,
  payload: bool,
});

export const getUsers = (username) => {
  return async (dispatch) => {
    try {
      dispatch(setIsNotFound(false));
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
    } catch (e) {
      dispatch(setIsNotFound(true));
    }
  };
};
