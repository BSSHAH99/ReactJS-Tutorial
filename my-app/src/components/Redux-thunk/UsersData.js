import React, { useEffect } from "react";
import {
  featchUseres,
  fetchUsersRequest,
} from "../reduxDemo/action/userDataAction";
import TestTable from "../ReusableComponents/Table/TestTable";

import { useSelector, useDispatch } from "react-redux";

function UsersData() {
  const myState = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUsersRequest());
    dispatch(featchUseres());
  }, []);

  console.log("mystate is ", myState);
  let key = Object.keys(myState.users[0] || {});
  console.log("this is key", key);

  let tableData = Object.values(myState.users || {});
  console.log("this is value", tableData);
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          {myState.loading === true ? (
            <div className="text-center">
              <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            // <TestTable theadData={key} tbodyData={tableData} />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">Phone No</th>
                </tr>
              </thead>
              <tbody>
                {myState.users.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <th scope="row">{items.name}</th>
                      <td>{items.email}</td>
                      <td>{items.address.city}</td>
                      <td>{items.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersData;
