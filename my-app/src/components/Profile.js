import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          Welcom {auth.uname}
          <button
            type="submit"
            onClick={handleLogout}
            className="btn btn-primary my-3 mx-3"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
