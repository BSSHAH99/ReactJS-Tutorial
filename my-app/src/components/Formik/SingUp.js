import React from "react";
import { FastField, FieldArray, useFormik ,Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  address:"",
  password: "",
  hobbies:[""],
};

const onSubmit = (values) => {
  console.log("values :>> ", values);
  
  // alert(JSON.stringify(values, null, 2));
};

// const validate =  values =>{
//   let error = {}

//   if(!values.name){
//     error.name = "Require"
//   }
//   if(!values.email){
//     error.email = "Require"
//   }else if( /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email))
//   {
//     error.email = "Invalid Email"
//   }
//   if(!values.password){
//     error.password = "Require"
//   }

//   return error

// }

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
  

});

const SingUp = () => {
  //  const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema,
  //  });

  // console.log('formik :>> ', formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="container my-3">
        <div className="container">
          <Form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field
                name="name"
                type="text"
                className="form-control"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
                // {...formik.getFieldProps("name")}
              />
              {/* {formik.touched.name &&  formik.errors.name ? <div className="error">{formik.errors.name}</div>: null} */}
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <Field
                name="email"
                type="email"
                className="form-control"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                // {...formik.getFieldProps("email")}
              />
              {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>: null} */}
              <ErrorMessage name="email" component={TextError}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <FastField
                name="address"
                // type="text"
                // className="form-control"
              >
                {
                  props  => {
                    // console.log("render Address");
                    const {field,form,meta} = props
                    // console.log('field :>> ', field);
                    // console.log('form :>> ', form);
                    // console.log('meta :>> ', meta);
                    return(
                      <div>
                        <input className="form-control" type="text" {...field}></input>
                        {meta.touched && meta.error ? <div className="error">{meta.error}</div>: null} 
                      </div>
                    )
                  }
                }
              </FastField>
              <ErrorMessage name="email" component={TextError}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field
                name="password"
                type="password"
                className="form-control"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.password}
                // {...formik.getFieldProps("password")}
              />
              {/* {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>: null} */}
              <ErrorMessage name="password" component={TextError}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <FieldArray
                name="hobbies"
                className="form-control"
              >
                {fieldArrayProps => {
                  // console.log("render Hobbies");
                  const {push,remove,form} = fieldArrayProps;
                  const {values} = form;
                  const {hobbies} = values;
                  // console.log('field Array props :>> ',hobbies)
                  
                  return <div>{
                    hobbies.map((hobbies,index)=> (
                      <div key={index} className="row">
                     
                      <div className="col my-3">
    
  
                        <Field  className="form-control" name={`hobbies[${index}]`}/>
                        </div>
                        <div className="col my-3">
                          {
                            
                            index > 0 && 
                            <button type="button" className="btn btn-primary mx-3" onClick={()=>{remove(index)}}>-</button>
                          }
                        <button type="button" className="btn btn-primary mx-3" onClick={()=>{push("")}}>+</button>
                        </div>
                      </div>
                    ))
                    }</div>
                }}
                </FieldArray>
              <ErrorMessage name="hobby" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default SingUp;
