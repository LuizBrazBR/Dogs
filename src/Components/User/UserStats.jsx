import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import VictoryLib from './VictoryLib';

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
      <div className="container">
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
      </div>
      ;
    </>
  );
};

export default UserStats;
