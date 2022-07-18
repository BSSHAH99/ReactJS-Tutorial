import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useAuth();
  if (!localStorage.getItem("token")) {
    return <Navigate replace to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default RequireAuth;
