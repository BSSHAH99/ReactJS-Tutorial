import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const TextArea = (props) => {
  const { label, name, ...rest } = props;
//   console.log('props :>> ', props);
  return (
    <>
    <label htmlFor={name}>{label}</label>
      <div className="form-floating">
        <Field
          as="textarea"
          className="form-control"
          id={name}
          name={name}
          {...rest}
        />
      </div>
      <ErrorMessage name={name} component={TextError}/>
    </>
  );
};

export default TextArea;
