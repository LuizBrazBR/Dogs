import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

const Conta = () => {
  const { login } = useContext(UserContext);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return <div>Conta</div>;
};

export default Conta;
