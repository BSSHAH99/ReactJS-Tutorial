import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState(" ");
  const navigat = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(user);
    navigat(redirectPath, { replace: true });
  };

  useEffect(() => {
    localStorage.getItem("token") &&
      localStorage.getItem("token") ==
        "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" &&
      navigat(-1);
  }, []);

  return (
    <>
      <div className="container my-3">
        <div className="container">
          <div className="mb-3">
            <label className="form-label">UserName :</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setUser(e.target.value)}
              aria-describedby="Enter UserName"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
