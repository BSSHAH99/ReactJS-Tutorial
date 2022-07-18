import axios from "./Services/Instances";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function LoginShop() {
  const navigat = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const redirectPath = location.state?.path || "/";
  const [uname, setuname] = useState("johnd");
  const [password, setpassword] = useState("m38rmF$");
  // const [token, setToken] = useState("");

  const handleLogin = () => {
    axios
      .post("/auth/login", {
        username: uname,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        auth.login(uname, res.data.token);
        navigat(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        window.alert("Invalid User Id password", error);
      });
  };

  // const login = () => {
  // fetch("https://fakestoreapi.com/auth/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: uname,
  //     password: password,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => window.alert("Invalid User Id password", error));
  // };

  useEffect(() => {
    localStorage.getItem("token") && navigat(-1);
  }, []);

  return (
    <>
      <form
        className="container my-3 mx-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            autoComplete="on"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={uname}
            onChange={(e) => {
              setuname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            autoComplete="on"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LoginShop;
