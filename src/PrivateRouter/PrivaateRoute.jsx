import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    return <Navigate to={"/Login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
