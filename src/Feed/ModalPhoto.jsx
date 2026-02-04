import React from 'react';
import styles from './ModalPhoto.module.css';

const ModalPhoto = ({ data }) => {
  if (!data) return null;

  const { photo } = data;

  return (
    <div className={`container ${styles.grid}`}>
      <img src={photo.src} alt="" />
      <div className={styles.details}>
        <div>
          <span>{photo.author}</span>
          <span>{photo.acessos}</span>
        </div>
        <div>
          <h1 className="title">{photo.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ModalPhoto;
