import React from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <UserAuthContextProvider>
        <SignUpForm />
      </UserAuthContextProvider>
    </>
  );
};

export default SignUp;
