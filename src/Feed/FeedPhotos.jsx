import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET } from '../api';
import Photos from './Photos';
import styles from './FeedPhotos.module.css';
import Spinner from '../Components/Spinner';

const FeedPhotos = ({ setModal, page, setPage, total }) => {
  const { data, request, loading } = useFetch();
  //const [infinite, setInfinite] = useState(false);
  const infinite = useRef(false); // ✅
  const loadingApi = useRef(false); // guard síncrono
  const [awaitApi, setAwaitApi] = useState(false);

  useEffect(() => {
    if (!infinite.current) {
      loadingApi.current = true; // ← falta isso aqui
      async function requestMore() {
        const { endpoint, options } = PHOTO_GET(total, page, 0);
        const { json, response } = await request(endpoint, options);

        if (response && response.ok && json.length === total) {
          setTimeout(() => {
            setAwaitApi(false);
            loadingApi.current = false;
          }, 500);
        } else {
          infinite.current = true;
        }
      }

      requestMore();
    }
  }, [request, page, infinite, total]);

  useEffect(() => {
    function carregarMais() {
      if (awaitApi || infinite.current || loadingApi.current) return;

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (data && data.length > 0 && !awaitApi && !loadingApi.current) {
          loadingApi.current = true;
          setAwaitApi(true);
          setPage((prev) => [...prev, prev.length + 1]);
        } else {
          infinite.current = true;
        }
      }
    }

    window.addEventListener('wheel', carregarMais);
    window.addEventListener('scroll', carregarMais);

    return () => {
      window.removeEventListener('wheel', carregarMais);
      window.removeEventListener('scroll', carregarMais);
    };
  }, [data, awaitApi, infinite, setPage]);

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
