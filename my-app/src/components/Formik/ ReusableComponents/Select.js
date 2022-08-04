import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const Select = (props) => {
  const { label, name, option, ...rest } = props;
  // console.log("option :>> ", option);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="form-floating">
        <Field as="select" id={name} name={name} {...rest}>
          {option.map((option) => {
            return (
              <option
              className="dropdown-item"
                key={option.value}
                value={option.value}
              >
                {option.key}
              </option>
            );
          })}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Select;
