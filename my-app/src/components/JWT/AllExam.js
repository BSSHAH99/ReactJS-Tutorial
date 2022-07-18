import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
export const AllExam = () => {
  const navigat = useNavigate();
  const [allExam, steAllExam] = useState();

  const apiUrl = "https://nodejsexamination.herokuapp.com";

  const accessToken = localStorage.getItem("token1");
  // console.log(">>>>>>>>>>", accessToken);

  const myDecodedToken = decodeToken(accessToken);
  const isMyTokenExpired = isExpired(accessToken);

  console.log("this is myDecodedToken", myDecodedToken);
  console.log("this is isMyTokenExpired", isMyTokenExpired);

  const authAxios = axios.create({
    base: apiUrl,
    headers: { "access-token": accessToken },
  });

  const allExma = () => {
    authAxios
      .get(`${apiUrl}/student/studentExam`)
      .then((res) => {
        console.log(">?>>>>>>>>>?>?>?", res.data);
        if (isMyTokenExpired) {
          navigat("/jwt");
        } else {
          steAllExam(res.data.data);
        }
        // if (res.data.message === "jwt expired" || res.data.statusCode === 401) {
        //   navigat("/jwt");
        // } else {
        //   steAllExam(res.data.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allExma();
    console.log("componenst render");
  }, []);
  console.log("**********************************this is data", allExam);
  return (
    <React.Fragment>
      This Is All Exam components
      {/* {allExam?.length > 0 &&
        allExam.map((items) => {
          return console.log(items);
        })} */}
      {/* <div className="container my-3">
        <div className="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </React.Fragment>
  );
};
