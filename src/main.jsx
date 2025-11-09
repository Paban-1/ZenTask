import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./constants";

// Import Pages
import {
  LandingPage,
  RegisterPage,
  LoginPage,
  Dashboard,
  ProtectedRoute,
} from "./constants/index.js";

// Import element for Routing
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
