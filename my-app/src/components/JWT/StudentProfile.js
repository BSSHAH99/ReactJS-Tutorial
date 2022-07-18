import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestButton from "../ReusableComponents/Button/TestButton";

const StudentProfile = () => {
  const navigat = useNavigate();
  const username = localStorage.getItem("uname1");

  // setUser(username);
  // useEffect(() => {
  //   console.log("");
  //   // !localStorage.getItem("token1") ? navigat("/jwt") : console.log("");
  // }, [user]);

  const logout = () => {
    localStorage.removeItem("uname1");
    localStorage.removeItem("token1");
    navigat("/jwt");
  };

  const allExam = () => {
    navigat("/all-exmas");
  };
  return (
    <div className="container my-3">
      <div className="container">
        <h1>Welcome {username}</h1>
      </div>
      <div className="container my-3">
        <TestButton onClick={logout}>Logout</TestButton>
      </div>
      <div className="container my-3">
        <TestButton onClick={allExam}>All Exam</TestButton>
      </div>
    </div>
  );
};

export default StudentProfile;
