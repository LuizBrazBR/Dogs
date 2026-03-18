import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import FeedPhoto from "./FeedPhoto";
import FeedModal from "./FeedModal";
import Feed from "./Feed";
import { Helmet } from "react-helmet";

const UserFeed = () => {
  const { data: context } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>{context.nome} - Dogs</title>
        <meta name="description" content="Minha conta" />
      </Helmet>
      <Feed user={context.id} />
    </>
  );
};

export default UserFeed;
