import React from "react";
import SignUp from "./SignUp";
import signUpFields from "../reduxDemo/constants/FormFields";
import UserList from "./UserList";

export const Demo = () => {
  return (
    <div className="container my-3">
      <div className="container">
        <SignUp formAttributes={signUpFields} />
        <br />
        <UserList />
      </div>
    </div>
  );
};
