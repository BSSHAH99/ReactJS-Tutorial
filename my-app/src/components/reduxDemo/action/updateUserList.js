import { UPDATE_USER } from "../constants/AllConstants";
import validationSelector from "../../ReusableComponentsDemo/validationSelector";
import clearFormAction from "../action/clearFormAction";
import { findIndex } from "../../ReusableComponentsDemo/RegularExpression";

export default (list) => (dispatch, getState) => {
  const state = getState();
  const { isValid, form } = validationSelector(list, state, dispatch);

  if (isValid) {
    const editId = state.forms.editId;
    const clonedUserList = [...state.user.userList];
    const clonedUserListIndex = findIndex(clonedUserList, editId);
    if (clonedUserListIndex > -1) {
      clonedUserList[clonedUserListIndex] = { id: editId, ...form };
    }
    dispatch({ type: UPDATE_USER, clonedUserList });
    dispatch(clearFormAction());
  }
};
