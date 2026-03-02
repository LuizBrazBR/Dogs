import React from "react";
import styles from "./Photos.module.css";
import Skeleton from "../Components/Skeleton";

const Photos = (props) => {
  function handleClick() {
    props.setModal(props);
  }

  return (
    <div className={styles.section} onClick={handleClick}>
      <Skeleton src={props.src} alt={props.title} />
      <span className={styles.acessos}>{props.acessos}</span>
    </div>
  );
};

export default Photos;
