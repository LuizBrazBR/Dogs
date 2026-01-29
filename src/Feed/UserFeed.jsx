import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import styles from "./FeedPhotos.module.css";
import Photos from "./Photos";

const UserFeed = () => {
  const { data: id } = useContext(UserContext);
  {
    id && console.log("Meu ID é", id.id);
  }

  const { data, loading, error, request, setError } = useFetch();

  const { endpoint, options } = PHOTO_GET(id.id);

  useEffect(() => {
    request(endpoint.photos_query, options);

    console.log(endpoint.photos_query);
  }, []);

  return (
    <div>
      {" "}
      <div className={`container ${styles.containerPhoto}`}>
        {data &&
          data.map((photo) => {
            return <Photos src={photo.src} alt={photo.title} />;
          })}
      </div>
    </div>
  );
};

export default UserFeed;
