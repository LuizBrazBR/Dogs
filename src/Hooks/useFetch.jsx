import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, options) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(endpoint, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message);
      setData(json);
      return response.ok;
    } catch (err) {
      setError(err.message);
      setData(null);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
