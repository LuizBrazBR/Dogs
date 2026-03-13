import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../api";

import Photos from "./Photos";
import FeedPhoto from "./FeedPhoto";
import Feed from "./Feed";

const Author = () => {
  const { user } = useParams();

  return (
    <>
      <section className="container">
        <h1 className="title">{user}</h1>
      </section>
      <Feed user={user} />
    </>
  );
};

export default Author;
