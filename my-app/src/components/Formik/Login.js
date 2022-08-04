import React from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <UserAuthContextProvider>
        <LoginForm />
      </UserAuthContextProvider>
    </>
  );
};

export default Login;
