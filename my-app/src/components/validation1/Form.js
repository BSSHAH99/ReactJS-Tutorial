import "./form.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../reduxDemo/store";

const storeans = store.getState();

function Form() {
  console.log("this is store ", storeans);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    cofirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //   setSelect((prevSelect) => ({
  //     ...prevSelect,
  //     [key]: prevSelect[key]
  //       ? { ...prevSelect[key], [name]: value }
  //       : { [name]: value, type: "date" },
  //   }));
  // };

  const handalChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // localStorage.setItem([name], [value]);

    // setFormValues((prev) => ({ ...prev, [name]: value }));

    // setFormErrors({ ...formErrors, [name]: value });

    // setFormErrors((prve) => ({
    //   ...prve,
    //   name: value ? { [name]: validate(value) } : { [name]: validate(value) },
    // }));
    setFormErrors(validate(formValues));
  };

  const handalSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regUsername = /^[A-Za-z0-9]{3,16}$/i;
    const regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

    if (!values.username) {
      errors.username = "Username is Required";
    } else if (!regUsername.test(values.username)) {
      errors.username =
        "Username should be 3-16 characte shouldn,t include any spiecial characte";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regEmail.test(values.email)) {
      errors.email = "iIt,s should be Valid Email";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 4) {
      errors.password = "password more than 4 characte";
    }
    if (!values.cofirmpassword) {
      errors.cofirmpassword = "Cofirmpassword is Required";
    } else if (values.cofirmpassword.length < 4) {
      errors.cofirmpassword = "Password more than 4 characte";
    } else if (values.cofirmpassword != values.password) {
      errors.cofirmpassword = "Password is Not Match";
    }
    return errors;
  };

  console.log("this is formErrors", formErrors);

  // Redux Start
  const myState = useSelector((state) => state.changeTheNumber.count);
  const myState1 = useSelector((state) => state.changeTheNumber.abc);

  console.log(myState);
  // Redux End

  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="container">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="alert alert-success" role="alert">
              Thank you! Signed In Successfully
            </div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}

          <form onSubmit={handalSubmit}>
            <h1>{myState}</h1>
            <h1>{myState1}</h1>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formValues.username}
                onChange={handalChange}
              />
              <p>{formErrors.username}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handalChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                current-password="true"
                value={formValues.password}
                autoComplete="on"
                onChange={handalChange}
              />
              <p>{formErrors.password}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Cofirmpassword</label>
              <input
                type="password"
                className="form-control"
                id="cofirmpassword"
                name="cofirmpassword"
                current-password="true"
                value={formValues.cofirmpassword}
                autoComplete="on"
                onChange={handalChange}
              />
              <p>{formErrors.cofirmpassword}</p>
            </div>

            <div className="mx-3 my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
