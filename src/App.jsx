// Import React
import React from "react";
// import Outlet for routing
import { Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import {store} from "./store/store.js"

const App = () => {
  return (
    <div className="">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};

export default App;
