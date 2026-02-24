import React, { useContext } from "react";
import styles from "./ModalPhoto.module.css";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../UserContext";
import PhotoDelete from "./PhotoDelete";

const ModalPhoto = ({ data }) => {
  const { data: login } = useContext(UserContext);

  if (!data) return null;

  const { photo, comments } = data;

  console.log(login.username);

  return (
    <div className={`container ${styles.grid}`}>
      <img src={photo.src} alt="" />
      <div className={styles.details}>
        <div className={styles.author}>
          {login.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <a href="./author">@{photo.author}</a>
          )}
          <span className={styles.acessos}>{photo.acessos}</span>
        </div>
        <div>
          <h1 className="title">{photo.title}</h1>
        </div>
        <div className={styles.info}>
          <span>{photo.peso} kg</span>
          <span>{photo.idade} anos</span>
        </div>

        <PhotoComments comments={comments} photo={photo} />
      </div>
    </div>
  );
};

export default ModalPhoto;
