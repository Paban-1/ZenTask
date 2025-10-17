// Import React
import React from "react";
// import Outlet for routing
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="border border-black min-h-screen text-black">
      <Outlet />
    </div>
  );
};

export default App;
