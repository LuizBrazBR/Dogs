import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = window.localStorage.getItem("token");

  const request = useCallback(
    async (endpoint, options) => {
      let headers = { ...options };

      headers = {
        ...options,
        headers: {
          ...options.headers,
          ...(token
            ? {
                Authorization: "Bearer " + token,
              }
            : {}),
        },
      };

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(endpoint, headers);
        const json = await response.json();
        if (!response.ok) throw new Error(json.message);
        setData(json);
        return { response, json };
      } catch (err) {
        setError(err.message);
        setData(null);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [token],
  );

  return { data, loading, error, request, setError };
};

export default useFetch;
