import React from "react";
import { PHOTO_DELETE } from "../api";
import useFetch from "../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { request } = useFetch();

  async function handleButton() {
    if (window.confirm("Quer excluir mesmo?")) {
      const { endpoint, options } = PHOTO_DELETE(id);
      const { response } = await request(endpoint, options);
      if (response.ok) {
        location.reload();
      }
    }
  }

  return (
    <button type="button" onClick={handleButton} className={styles.delete}>
      Deletar
    </button>
  );
};

export default PhotoDelete;
