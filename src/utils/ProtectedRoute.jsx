import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, status } = useSelector((state) => state.auth);

  console.log("SO this is protected user",user);
  if(status === "loading")
   {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Checking authentication...
      </div>
    );
  }
  
  

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
