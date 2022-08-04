import React from "react";
import {
  FastField,
  FieldArray,
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {

    const dropdownOption = [
        {key:"Select Option" ,value:""},
        {key:"1",value:"Option1"},
        {key:"2",value:"Option2"},
        {key:"3",value:"Option3"},
        {key:"4",value:"Option4"},
    ]
    const radioOption = [
        {key:"1",value:"Option1"},
        {key:"2",value:"Option2"},
        {key:"3",value:"Option3"},
        {key:"4",value:"Option4"},
    ]
    const checkOption = [
        {key:"1",value:"Option1"},
        {key:"2",value:"Option2"},
        {key:"3",value:"Option3"},
        {key:"4",value:"Option4"},
    ]
  const initialValues = {
    email: "",
    address: "",
    selectOption:'',
    radioOption:"",
    checkOption:[],
    birthDate:""
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkOption: Yup.array().required("Required"),
    birthDate:Yup.date().required("Required")
  });
  onsubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      {(formik) => (
        <div className="container my-3">
          <div className="container">
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                label="Address"
                name="address"
              />
                  <FormikControl
                control="select"
                label="Select a Option"
                name="selectOption"
                option={dropdownOption}
              />
              <FormikControl
                control="radio"
                label="Radio Topic"
                name="radioOption"
                option={radioOption}
              />
                <FormikControl
                control="checkbox"
                label="ChekBox Topic"
                name="checkOption"
                option={checkOption}
              />
              {/* <FormikContainer
              control="date"
              label="Pick a Date"
              name="birthDate"
              ></FormikContainer> */}
              <div className="my-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormikContainer;
