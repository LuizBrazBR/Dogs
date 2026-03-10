import React, { useContext } from "react";
import styles from "./ModalPhoto.module.css";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../UserContext";
import PhotoDelete from "./PhotoDelete";
import Skeleton from "../Components/Skeleton";
import { Link } from "react-router-dom";

const ModalPhoto = ({ data }) => {
  const { data: login } = useContext(UserContext);

  if (!data) return null;

  const { photo, comments } = data;

  return (
    <div className={`containerModal ${styles.grid} `}>
      <div className={styles.skeleton}>
        <Skeleton src={photo.src} />
      </div>

      <div className={styles.details}>
        <div className={styles.author}>
          {login && login.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <a href="./author">@{photo.author}</a>
          )}
          <span className={styles.acessos}>{photo.acessos}</span>
        </div>
        <div>
          <Link to={`/photo/${photo.id}`}>
            <h1 className="title">{photo.title}</h1>
          </Link>
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
