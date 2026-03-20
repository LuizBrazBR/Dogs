import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Spinner from "../../Components/Spinner";

const VictoryLib = lazy(() => import("./VictoryLib"));

const UserStats = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    async function getData() {
      const { endpoint, options } = STATS_GET();

      try {
        await request(endpoint, options);
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
      <div className="container animeLeft">
        <Suspense fallback={<Spinner />}>
          {data && (
            <VictoryLib
              data={data.map((i) => {
                return {
                  x: i.title,
                  y: Number(i.acessos),
                };
              })}
            />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default UserStats;
