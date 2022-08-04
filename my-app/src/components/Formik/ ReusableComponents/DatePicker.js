import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DatePicker = (props) => {
    const { label, name, option, ...rest } = props;
  return (
    <div className="form-check">
    <label className="form-check-label" htmlFor={label}>
      {label}
    </label>
    <br/>
    <Field name={name} {...rest}>
     {
        ({form,field})=>{
            const {setFieldValue} = form
            const {value} = field
            return (
                <DateView
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => setFieldValue(name,val)}
                ></DateView>
            )

        }
     }
    </Field>
    <ErrorMessage name={name} component={TextError}></ErrorMessage>
  </div>
  )
}

export default DatePicker