import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "../store/authSlice.js";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    // Fetch user if not already loaded
    if (status === "idle") {
      dispatch(fetchCurrentUser());
    }

    // Redirect if user not logged in and loading is done
    if (status === "succeeded" && !user) {
      navigate("/user/v1/api/login");
    }
  }, [dispatch, user, status, navigate]);

  // While checking session
  if (status === "loading" || status === "idle") {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Checking session...
      </div>
    );
  }

  // If no user after fetch
  if (!user) return null;

  // Authenticated → render the route
  return children;
};

export default ProtectedRoute;
