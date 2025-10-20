// Import React
import React from "react";
// import Outlet for routing
import { Outlet } from "react-router-dom";
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default App;
