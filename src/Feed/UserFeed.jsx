import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import FeedPhoto from "./FeedPhoto";
import FeedModal from "./FeedModal";
import Feed from "./Feed";

const UserFeed = () => {
  const { data: context } = useContext(UserContext);

  return <Feed user={context.id} />;
};

export default UserFeed;
