import { CLEAR_FORM } from "../constants/AllConstants";

export default () => (dispatch, getState) => {
  const state = getState();
  const { form, formError } = { ...state.forms };
  for (const formField in form) delete form[formField];
  for (const formErrorField in formError) delete formError[formErrorField];
  dispatch({
    type: CLEAR_FORM,
    form,
    formError,
  });
};
