import React from "react";
import Home from "../Home";
import { UserAuthContextProvider } from "./UserAuthContext";

const HomeMain = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Home />
      </UserAuthContextProvider>
    </div>
  );
};

export default HomeMain;
