import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth";

export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.titel[0].bhavik}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/refs">
                      Ref
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/list">
                      List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/memovspure">
                      Memo vs Pure Component
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/context">
                      Context Provider
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/higher-order-components"
                    >
                      Higher-Order Components
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/setstate">
                      setState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hooks">
                      useState With Previous State
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useEffectvruseMemo">
                      useEffect Vr useMemo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecallback">
                      useCallback
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              {!localStorage.getItem("token") ||
                (localStorage.getItem("token") !=
                  "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                ))}
              <li className="nav-item">
                <Link className="nav-link" to="/task">
                  Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jvascript-advances">
                  JavascripAdvances
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Validation
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/validation">
                      Validation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dynamic-validation">
                      Dynamic Validation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Redux
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/redux-functional-components"
                    >
                      Redux Functional Components
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/redux-class-components"
                    >
                      Redux Class Components
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/redux-thunk">
                      Redux Thunk
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/redux-thunk-class-components"
                    >
                      Redux Thunk Class Components
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usereducer">
                      Use Reducer
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reusable Components
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/reusable-components">
                      Reusable Components
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/test-table">
                      Test Table
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/reusable-student-from">
                      Student From
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/reusable-Components-demo"
                    >
                      Reusable Components Demo
                    </Link>
                  </li>
                </ul>
              </li>
              {!localStorage.getItem("token1") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/jwt">
                    JWT
                  </Link>
                </li>
              ) : null}

              <li className="nav-item">
                <Link className="nav-link" to="/env">
                  .env File
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              onClick={() => navigate(-1)}
              type="submit"
            >
              Go Back
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

// For Array
// Navbar.propTypes = {
//   titel: PropTypes.arrayOf(PropTypes.number),
// };

// For Object
// Navbar.propTypes = {
//   titel: PropTypes.object,
// };

// For Array Of Object
Navbar.propTypes = {
  titel: PropTypes.arrayOf(
    PropTypes.shape({
      bhavik: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Navbar.propTypes = {
//   titel: PropTypes.string.isRequired,
//   aboutText: PropTypes.string,
// };

Navbar.defaultProps = {
  titel: "Set Title Hear",
  aboutText: "About Text Hear",
};
