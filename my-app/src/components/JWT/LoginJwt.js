import React, { useEffect, useState } from "react";
import TestButton from "../ReusableComponents/Button/TestButton";
import TestFormInput from "../ReusableComponents/Form/TestFormInput";
import loginData from "./LoginData";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const LoginJwt = () => {
  const navigat = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState({
    email: "dardubasti@nedoz.com",
    password: "123456789",
  });
  const redirectPath = location.state?.path || "/student-profile";

  useEffect(() => {
    console.log("");
  }, []);

  const handalSubmit = (e) => {
    login();
    e.preventDefault();
    setValues(reset(values));
  };

  const reset = (obj) => {
    const newObj = Object.keys(obj).reduce((accumulator, current) => {
      accumulator[current] = "";
      return accumulator;
    }, {});
    return newObj;
  };

  const getData = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios
      .post("https://nodejsexamination.herokuapp.com/users/login", values)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token1", res.data.data.token);
        localStorage.setItem("uname1", res.data.data.name);
        navigat(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        window.alert("Invalid User Id Password", error);
      });
  };

  // console.log(localStorage.getItem("uname1"));
  return (
    <div className="container my-3">
      <div className="container">
        <form onSubmit={handalSubmit}>
          {loginData.map((input, index) => {
            return (
              <TestFormInput
                key={index}
                {...input}
                value={values[input.name]}
                onChange={getData}
              />
            );
          })}

          <TestButton type={"submit"}>Login</TestButton>
        </form>
      </div>
      {/* <p>email: "dardubasti@nedoz.com", password: "123456789"</p> */}
    </div>
  );
};

export default LoginJwt;
