import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import Photos from "./Photos";
import FeedPhoto from "./FeedPhoto";

const Author = () => {
  const { user } = useParams();
  const { data, request } = useFetch();

  useEffect(() => {
    async function chamarApi() {
      const { endpoint, options } = PHOTO_GET(9, 1, user);
      await request(endpoint, options);
    }

    chamarApi();
  }, [request, user]);

  return (
    <section className="container">
      <h1 className="title">{user}</h1>
      <FeedPhoto data={data} />
    </section>
  );
};

export default Author;
