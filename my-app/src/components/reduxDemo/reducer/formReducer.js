import {
  ONCHANGE,
  HANDLE_SUBMIT,
  CLEAR_FORM,
  EDIT_USER,
} from "../constants/AllConstants";
const initialState = {
  form: {
    userName: "Bhavik",
    email: "bsshah9879@gmail.com",
    age: "23",
    password: "Bbbbbb!1",
    confirmPassword: "Bbbbbb!1",
  },
  formError: {},
  isEdit: false,
  editId: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ONCHANGE:
      return {
        ...state,
        form: action.updatedForm,
        formError: action.updatedFormError,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        form: action.form,
        formError: action.formError,
      };
    case CLEAR_FORM:
      return {
        ...state,
        form: action.form,
        formError: action.formError,
        isEdit: false,
        editId: 0,
      };
    case EDIT_USER:
      return {
        ...state,
        form: action.form,
        isEdit: action.isEdit,
        editId: action.editId,
      };
    default:
      return state;
  }
}
