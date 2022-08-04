import React from 'react'
import  {Field ,ErrorMessage} from 'formik'
import TextError from '../TextError'
const Input = (props) => {
    const {label,name, ...rest} = props
    // console.log('props :>> ', props);
  return (
    <>
    <label htmlFor={label} className="form-label">{label}</label>
    <Field type="text" name={name} className="form-control" id={name} {...rest}/>
    <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </>
  )
}

export default Input