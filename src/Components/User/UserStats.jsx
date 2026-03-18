import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";

const UserStats = () => {
  const { request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { endpoint, options } = STATS_GET();

      try {
        const { response, json } = await request(endpoint, options);
        if (response.ok) {
          console.log(json);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [request]);

  return (
    <>
      <Helmet>
        <title>Estatísticas - Dogs</title>
        <meta name="description" content="Estatísticas" />
      </Helmet>
      <div className="container"></div>;
    </>
  );
};

export default UserStats;
