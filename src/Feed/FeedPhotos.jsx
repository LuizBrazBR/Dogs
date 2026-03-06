import React, { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET } from '../api';
import Photos from './Photos';
import styles from './FeedPhotos.module.css';
import Spinner from '../Components/Spinner';

const FeedPhotos = ({ setModal, page, setPage }) => {
  const { data, request, loading } = useFetch();
  const [infinite, setInfinite] = useState(false);
  const [awaitApi, setAwaitApi] = useState(false);

  useEffect(() => {
    if (!infinite) {
      async function requestMore() {
        const { endpoint, options } = PHOTO_GET(3, page, 0);
        const { json, response } = await request(endpoint, options);

        if (response && response.ok && json.length > 0) {
          setTimeout(() => {
            setAwaitApi(false);
            console.log('Fui');
          }, 500);
        }
      }

      requestMore();
    }
  }, [request, page, infinite]);

  useEffect(() => {
    function carregarMais() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (data && data.length > 0 && !awaitApi) {
          setAwaitApi(true);
          setPage((prev) => [...prev, prev.length + 1]);
        } else {
          setInfinite(true);
        }
      }
    }

    window.addEventListener('wheel', carregarMais);

    return () => {
      window.removeEventListener('wheel', carregarMais);
    };
  }, [data, awaitApi, infinite, setPage]);

  if (loading) return <Spinner />;

  return (
    <div className={`container ${styles.containerPhoto}`}>
      {data &&
        data.map((photo) => {
          return <Photos key={photo.id} {...photo} setModal={setModal} />;
        })}
    </div>
  );
};

export default FeedPhotos;
