import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";
import LoginCriar from "./LoginCriar";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="conta" />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCriar />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
