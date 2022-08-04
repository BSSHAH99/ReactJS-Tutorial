import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import { useState } from "react";

const SignUpForm = () => {
  const { signUp } = useUserAuth();
  const [error, SetError] = useState();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    resetForm();
    try {
      await signUp(values.email, values.password);
      navigate("/formik-login");
    } catch {
      SetError(error.message);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="container my-3">
              <div className="container">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <Form>
                  <FormikControl
                    control="input"
                    name="email"
                    type="email"
                    label="Email"
                  />
                  <FormikControl
                    control="input"
                    name="password"
                    type="password"
                    label="Password"
                  />
                  <FormikControl
                    control="input"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                  />
                  <div className="my-3">
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="btn btn-primary"
                    >
                      SignUp
                    </button>
                  </div>
                </Form>
                <Link to="/formik-login">Login</Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
