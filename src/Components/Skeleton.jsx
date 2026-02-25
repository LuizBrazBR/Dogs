import React, { useState } from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ ...props }) => {
  const [carregando, setCarregando] = useState(true);

  return (
    <>
      {carregando && (
        <div className={`${styles.skeleton} ${styles.skeletonImg}`}></div>
      )}
      <img
        {...props}
        alt=""
        onLoad={() => setCarregando(false)}
        style={{ display: carregando ? "none" : "block" }}
      />
    </>
  );
};

export default Skeleton;
