import { ActionType } from "./action-type";
import axios from "axios";

// export const featchUseres = () => {
//   return async (dispatch) => {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(res.data);
//     dispatch({ type: ActionType.FETCH_USERS_SUCCESS, payload: res.data });
//   };
// };

export const featchUseres = () => {
  return async (dispatch) => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)))
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

export const fetchUsersRequest = () => {
  console.log("fetchUsersRequest Function Is Callling");
  return {
    type: ActionType.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: ActionType.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: ActionType.FETCH_USERS_FAILURE,
    payload: error,
  };
};
