import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "./context/UserAuthContext";

const LoginForm = () => {
  const [error, SetError] = useState();
  const navigate = useNavigate();
  const { logIn, googleSignIn} = useUserAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    resetForm();
    try {
      await logIn(values.email, values.password);
      navigate("/formik-home");
    } catch (error){
      console.log(error);
      SetError(error.message);
    }
  };


  const handleGoogleSignIn = async (e) => {
    try {
      await googleSignIn();
      navigate("/formik-home");
    } catch (error) {
      console.log(error.message);
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
                  <div className="my-3">
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="btn btn-primary"
                    >
                      Login
                    </button>
                  </div>
                </Form>
                <div className="my-3">
                  <GoogleButton
                    label={"'Sign in with Google'"}
                    onClick={handleGoogleSignIn}
                  />
                </div>
                <Link to="/formik-signup">SignUp</Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
