import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import useFetch from "./Hooks/useFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);

  const { request, error, loading, setError } = useFetch();

  const clearError = useCallback(() => {
    setError(null);
  }, [setError]);

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
      const { json, response } = await request(endpoint, options);

      if (!response.ok) throw new Error(json.message);

      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
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
    <UserContext.Provider
      value={{ Login, data, login, logout, error, loading, clearError }}
    >
      {children}
    </UserContext.Provider>
  );
};
