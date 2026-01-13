import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import Spinner from "../Spinner";

const PublicRoute = ({ children }) => {
  const { login, authLoading } = useContext(UserContext);

  if (authLoading) {
    return <Spinner />;
  } else if (login) {
    return <Navigate to="/conta" replace />;
  }

  return children;
};

export default PublicRoute;
