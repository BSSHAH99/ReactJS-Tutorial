import { ADD_USER, ADD_USER_ERROR } from "../constants/AllConstants";
import clearFormAction from "./clearFormAction";
import validationSelector from "../../ReusableComponentsDemo/validationSelector";
import { alphabeticalSorting } from "../../ReusableComponentsDemo/RegularExpression";

export const submit = (list) => (dispatch, getState) => {
  const state = getState();
  const { isValid, form } = validationSelector(list, state, dispatch);
  if (isValid) {
    const cloneduserList = [...state.user.userList];
    const isExist = cloneduserList.some(({ email }) => email === form.email);
    if (!isExist) {
      let userList = [];
      const id = new Date().getTime();
      // const id = cloneduserList.length + 1;
      userList = { id, ...alphabeticalSorting(form) };
      console.log("this is userList >>>>", userList);
      dispatch(clearFormAction());
      dispatch({
        type: ADD_USER,
        userList,
      });
    } else {
      dispatch({
        type: ADD_USER_ERROR,
        errorMessage: "Already Email Exist",
      });
    }
  }
};
