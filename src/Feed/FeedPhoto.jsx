import React from "react";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ data, setModal, page }) => {
  return (
    <>
      <div className={` ${styles.containerPhoto}`}>
        {data &&
          data.map((photo) => {
            return <Photos key={photo.id} {...photo} setModal={setModal} />;
          })}
      </div>
      <div>
        {data && data.length === 0 && page === 1 && (
          <p>Não existem postagens.</p>
        )}
        {data && data.length === 0 && page > 1 && (
          <p>Não existem mais postagens.</p>
        )}
      </div>
    </>
  );
};

export default FeedPhoto;
