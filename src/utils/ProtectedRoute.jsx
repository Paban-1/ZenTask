import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, status } = useSelector((state) => state.auth);

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Checking session...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/user/v1/api/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
