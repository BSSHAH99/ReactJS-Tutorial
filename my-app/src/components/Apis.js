import React from "react";
// import axios from "./Services/Instances";

function Apis() {
  const api = [
    {
      url: "/users",
      method: "get",
    },
  ];

  axios
    .get("/users")
    .then((res) => {
      console.log(res.data);
      setusers(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return <>{api.map((items) => {})} </>;
}

export default Apis;
