import { ActionType } from "../action/action-type";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case ActionType.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userData;
