import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default Login;
