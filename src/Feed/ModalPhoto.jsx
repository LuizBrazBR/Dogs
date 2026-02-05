import React from 'react';
import styles from './ModalPhoto.module.css';

const ModalPhoto = ({ data }) => {
  if (!data) return null;

  const { photo } = data;

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
      </div>
    </div>
  );
};

export default ModalPhoto;
