import React from "react";
import Feed from "./Feed";
import { Helmet } from "react-helmet";

const FeedHome = () => {
  return (
    <div>
      <Helmet>
        <title>Mural - Dogs</title>
        <meta name="description" content="Mural de publicações" />
      </Helmet>
      <Feed user={0} />
    </div>
  );
};

export default FeedHome;
