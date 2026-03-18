import React from "react";
import { Helmet } from "react-helmet";

const UserStats = () => {
  return (
    <>
      <Helmet>
        <title>Estatísticas - Dogs</title>
        <meta name="description" content="Estatísticas" />
      </Helmet>
      <div className="container">UserStats</div>;
    </>
  );
};

export default UserStats;
