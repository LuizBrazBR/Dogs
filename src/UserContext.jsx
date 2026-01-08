import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);

  const getUser = useCallback(async (token) => {
    try {
      const { endpoint, options } = USER_GET(token);
      const getToken = await fetch(endpoint, options);
      const response = await getToken.json();
      setData(response);
      setLogin(true);
    } catch {
      logout();
    }
  }, []);

  async function Login(username, password) {
    try {
      const { endpoint, options } = TOKEN_POST({
        username,
        password,
      });
      const getToken = await fetch(endpoint, options);

      if (!getToken.ok) throw new Error("Usuário inválido!");

      const response = await getToken.json();
      window.localStorage.setItem("token", response.token);
      await getUser(response.token);
    } catch {
      setLogin(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        const { endpoint, options } = TOKEN_VALIDATE_POST(token);
        const sendToken = await fetch(endpoint, options);
        if (sendToken.ok) {
          await getUser(token);
        }
      }
    }
    autoLogin();
  }, [getUser]);

  function logout() {
    window.localStorage.removeItem("token");
    setData(null);
    setLogin(false);
  }

  return (
    <UserContext.Provider value={{ Login, data, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
