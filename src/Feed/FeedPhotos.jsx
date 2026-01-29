import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request, setError } = useFetch();

  const { endpoint, options } = PHOTO_GET();

  useEffect(() => {
    request(endpoint.photos_query, options);
  }, []);

  console.log(data);

  return (
    <div className={`container ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          return <Photos src={photo.src} alt={photo.title} />;
        })}
    </div>
  );
};

export default FeedPhotos;
