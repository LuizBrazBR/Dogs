import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";
import LoginCriar from "./LoginCriar";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginResetSenha from "./LoginResetSenha";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCriar />} />
          <Route path="/perdeu" element={<LoginPerdeuSenha />} />
          <Route path="/reset" element={<LoginResetSenha />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
