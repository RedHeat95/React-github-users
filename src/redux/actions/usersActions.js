import axios from "axios";
import { ACTIONS } from "../constants";

const setUsers = (users) => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});

const setIsSearch = (bool) => ({
  type: ACTIONS.SET_IS_SEARCH,
  payload: bool,
});

// export const getUsers = (username) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/vnd.github.v3+json",
//         },
//         body: JSON.stringify({ username }),
//       });
//       const result = await response.json();
//       console.log(result);

//       if (response.ok === false) {
//         throw result;
//       }

//       if (response.ok) {
//         dispatch(setUsers(result));
//       }
//     } catch (error) {
//       console.log("error");
//     }
//   };
// };

export const getUsers = (username) => {
  return async (dispatch) => {
    try {
      dispatch(setIsSearch(true));
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      if (response.status != 200) {
        return null;
      } else {
        dispatch(setUsers(response.data));
      }
    } catch {
      dispatch(setIsSearch(false));
    }
  };
};
