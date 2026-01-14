import React from "react";
import { UserContext } from "../UserContext";
import UserHeader from "./User/UserHeader";
import { Route, Routes } from "react-router-dom";

const Conta = () => {
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default Conta;
