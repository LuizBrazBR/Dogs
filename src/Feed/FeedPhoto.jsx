import React from "react";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ data }) => {
  return (
    <div className={` ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          return <Photos key={photo.id} {...photo} />;
        })}
    </div>
  );
};

export default FeedPhoto;
