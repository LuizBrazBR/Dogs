import React from "react";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ data, setModal }) => {
  return (
    <div className={` ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          return <Photos key={photo.id} {...photo} setModal={setModal} />;
        })}
    </div>
  );
};

export default FeedPhoto;
