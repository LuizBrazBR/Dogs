import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET_ID } from "../api";
import ModalPhoto from "./ModalPhoto";
import styles from "./FeedModal.module.css";
import Spinner from "../Components/Spinner";

const FeedModal = ({ modal, setModal }) => {
  const { request, data, loading } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET_ID(modal.id);
    request(endpoint, options);
  }, [modal.id, request]);

  function handleClickOutside(e) {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      setModal(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      {loading && <Spinner />}
      <ModalPhoto data={data} />
    </div>
  );
};

export default FeedModal;
