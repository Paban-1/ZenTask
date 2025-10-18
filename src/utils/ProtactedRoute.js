import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtactedRoute = ({ children }) => {
    const isUserLoggedin = false;
const navigate = useNavigate();

useEffect(() => {
    if (!isUserLoggedin) {
      navigate("/user/v1/api/login");
    }
  }, []);
  return children;
};

export default ProtactedRoute;
