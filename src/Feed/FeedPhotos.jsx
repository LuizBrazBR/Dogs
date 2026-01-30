import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, request } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET(9, 1, 0);
    request(endpoint, options);
  }, [request]);

  console.log(data);

  return (
    <div className={`container ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          console.log(photo);
          return <Photos key={photo.id} {...photo} />;
        })}
    </div>
  );
};

export default FeedPhotos;
