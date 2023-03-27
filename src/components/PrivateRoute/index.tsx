import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "context/UserContext";

interface IPrivateRoute {
  children: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: IPrivateRoute): JSX.Element => {
  const { state } = useUser();

  const isAuth = state?.user?.email;

  return isAuth ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
