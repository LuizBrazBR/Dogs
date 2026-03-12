import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import FeedPhoto from "./FeedPhoto";

const UserFeed = () => {
  const { data: context } = useContext(UserContext);

  const { data, request } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET(9, 1, context.id);

    request(endpoint, options);
  }, [request, context.id]);

  return (
    <div>
      <FeedPhoto data={data} />
    </div>
  );
};

export default UserFeed;
