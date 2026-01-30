import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import styles from "./FeedPhotos.module.css";
import Photos from "./Photos";

const UserFeed = () => {
  const { data: context } = useContext(UserContext);

  const { data, request } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET(9, 1, context.id);

    request(endpoint, options);
  }, [request, context.id]);

  return (
    <div>
      <div className={`container ${styles.containerPhoto}`}>
        {data &&
          data.map((photo) => {
            return <Photos key={photo.id} {...photo} />;
          })}
      </div>
    </div>
  );
};

export default UserFeed;
