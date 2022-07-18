import { EDIT_USER } from "../constants/AllConstants";

export const editUserList = (editId) => (dispatch, getState) => {
  const state = getState();
  const { id, ...rest } = [...state.user.userList].find(
    ({ id }) => id === editId
  );
  if (id) {
    let clonedFormList = { ...state.forms.form };
    clonedFormList = rest;
    dispatch({
      type: EDIT_USER,
      form: clonedFormList,
      isEdit: true,
      editId: id,
    });
  }
};
