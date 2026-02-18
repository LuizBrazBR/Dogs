import React from "react";
import styles from "./ModalPhoto.module.css";
import PhotoComments from "./PhotoComments";

const ModalPhoto = ({ data }) => {
  if (!data) return null;

  const { photo, comments } = data;

  return (
    <div className={`container ${styles.grid}`}>
      <img src={photo.src} alt="" />
      <div className={styles.details}>
        <div className={styles.author}>
          <a href="./author">@{photo.author}</a>
          <span className={styles.acessos}>{photo.acessos}</span>
        </div>
        <div>
          <h1 className="title">{photo.title}</h1>
        </div>
        <div className={styles.info}>
          <span>{photo.peso} kg</span>
          <span>{photo.idade} anos</span>
        </div>

        <PhotoComments comments={comments} />
      </div>
    </div>
  );
};

export default ModalPhoto;
