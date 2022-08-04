import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Home = () => {
  const { user,logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async ()=>{
      try {
        await logOut();
        console.log('call :>> ');
        navigate("/formik-login");
      } catch (error) {
        console.log(error.message);
      }
  }
  console.log("user :>> ", user);
  return (
    <>
      <div className="container my-3">
        <div className="container">

          <div className="card">
            <div className="card-header">Hello Welcome</div>
            <div className="card-body">
              <h5 className="card-title">{user && user.email}</h5>
              {/* <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p> */}
              <div className="my-3">
            <button type="submit" className="btn btn-primary" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
