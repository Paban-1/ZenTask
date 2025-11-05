import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user, status } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "succeeded" && !user) {
      navigate("/user/v1/api/login");
    }
  }, [status, user, navigate]);

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Checking session...
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
