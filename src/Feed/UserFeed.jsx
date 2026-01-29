import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import styles from "./FeedPhotos.module.css";
import Photos from "./Photos";

const UserFeed = () => {
  const { data: context } = useContext(UserContext);

  const { data, request } = useFetch();

  const { endpoint, options } = PHOTO_GET(context.id);

  useEffect(() => {
    request(endpoint.photos_query, options);
  }, [endpoint.photos_query, options, request]);

  return (
    <div>
      <div className={`container ${styles.containerPhoto}`}>
        {data &&
          data.map((photo) => {
            return <Photos {...photo} />;
          })}
      </div>
    </div>
  );
};

export default UserFeed;
