import React, { useEffect, useState } from "react";
import axios from "./Services/Instances";
import { apiCalling } from "./apiCalling";

function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/users")
    // .then((res) => res.json())
    // .then((json) => {
    //   console.log(json);
    //   setusers(json);
    // });

    apiCalling("users", "get").then((data) => {
      console.log(data);
      setusers(data);
    });

    // axios
    //   .get("/users")
    //   .then((res) => {
    //     console.log(res.data);
    //     setusers(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-5 my-5">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone No</th>
              {/* <th scope="col">View</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name.firstname}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.phone}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Users;
