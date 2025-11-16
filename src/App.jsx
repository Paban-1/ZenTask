// Import React
import React, {useEffect} from "react";
// import Outlet for routing
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUserThunk } from "./store/authSlice.js";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);
  return (
    <div className="">

        <Outlet />
  
    </div>
  );
};

export default App;
