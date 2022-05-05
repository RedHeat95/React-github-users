import axios from "axios";
import { ACTIONS } from "../constants";

export const setUsers = (users) => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});

export const getUsers = (username = "gaearon") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    dispatch(setUsers(response.data));
  };
};
