import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Photos from "./Photos";
import styles from "./FeedPhotos.module.css";
import Spinner from "../Components/Spinner";

const FeedPhotos = ({
  setModal,
  page,
  total,
  infinite,
  loadingApi,
  setAwaitApi,
}) => {
  const { data, request, loading } = useFetch();

  const loadingApiRef = loadingApi;
  const infiniteApiRef = infinite;

  useEffect(() => {
    if (!infinite.current) {
      loadingApiRef.current = true; // ← falta isso aqui
      async function requestMore() {
        const { endpoint, options } = PHOTO_GET(total, page, 0);
        const { json, response } = await request(endpoint, options);

        if (response && response.ok && json.length === total) {
          setTimeout(() => {
            setAwaitApi(false);
            loadingApi.current = false;
          }, 500);
        } else {
          infiniteApiRef.current = true;
        }
      }

      requestMore();
    }
  }, [
    request,
    page,
    infinite,
    total,
    infiniteApiRef,
    loadingApi,
    loadingApiRef,
    setAwaitApi,
  ]);

  if (loading) return <Spinner />;

  return (
    <div className={`container ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          return <Photos key={photo.id} {...photo} setModal={setModal} />;
        })}
      {data && data.length <= 0 && <p>Não existem mais postagens.</p>}
    </div>
  );
};

export default FeedPhotos;
