import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
const RadioButton = (props) => {
  const { label, name, option, ...rest } = props;
  // console.log('props :>> ', props);
  return (
    <>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {label}
        </label>
        <br/>
        <Field name={name} {...rest}>
          {({ field }) => {
            return option.map((option) => {
                // console.log('option,field :>> ', option,field);
              return (
                <React.Fragment key={option.key}>
                  
                  <input
                    className="form-check-input"
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label className="form-check-label" htmlFor={option.value}>
                    {option.key}
                  </label>
                  <br/>
                </React.Fragment>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={TextError}></ErrorMessage>
      </div>
    </>
  );
};

export default RadioButton;
