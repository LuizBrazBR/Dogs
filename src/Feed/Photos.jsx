import React from "react";
import styles from "./Photos.module.css";

const Photos = (props) => {
  return (
    <div className={styles.section}>
      <img src={props.src} alt={props.title} />
      <span className={styles.acessos}>{props.acessos}</span>
    </div>
  );
};

export default Photos;
