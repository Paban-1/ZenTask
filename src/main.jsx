import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import Pages
import {
  LandingPage,
  RegisterPage,
  LoginPage,
  Dashboard,
  ProtactedRoute,
} from "./constants/index.js";

// Import element for Routing
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Provider store={store}>
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/user/v1/api/register" element={<RegisterPage />} />
      <Route path="/user/v1/api/login" element={<LoginPage />} />
      <Route
        path="/user/v1/api/dashboard"
        element={
          // <ProtactedRoute>
          <Dashboard />
          // </ProtactedRoute>
        }
      />
    </Route>
    // </Provider>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
