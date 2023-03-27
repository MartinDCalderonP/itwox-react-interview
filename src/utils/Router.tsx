import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import PrivateRoute from "components/PrivateRoute";
import Dashboard from "pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "dashboard/:page?",
    element: (
      <PrivateRoute redirectTo="/sign-in">
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
