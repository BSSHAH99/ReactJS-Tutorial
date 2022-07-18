import { DELETE_USER } from "../constants/AllConstants";
import { findIndex } from "../../ReusableComponentsDemo/RegularExpression";

export default (deleteId) => (dispatch, getState) => {
  const state = getState();
  const clonedUserList = [...state.user.userList];
  const index = findIndex(clonedUserList, deleteId);
  if (index > -1) {
    clonedUserList.splice(clonedUserList, 1);
  }
  dispatch({
    type: DELETE_USER,
    clonedUserList,
  });
};
