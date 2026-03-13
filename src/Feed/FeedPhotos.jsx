import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Spinner from "../Components/Spinner";
import FeedPhoto from "./FeedPhoto";

const FeedPhotos = ({
  setModal,
  page,
  total,
  infinite,
  loadingApi,
  setAwaitApi,
  user,
}) => {
  const { data, request, loading } = useFetch();

  const loadingApiRef = loadingApi;
  const infiniteApiRef = infinite;

  useEffect(() => {
    if (!infinite.current) {
      loadingApiRef.current = true; // ← falta isso aqui
      async function requestMore() {
        const { endpoint, options } = PHOTO_GET(total, page, user);
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
    user,
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
    <div className={`container`}>
      <FeedPhoto data={data} setModal={setModal} page={page} />
    </div>
  );
};

export default FeedPhotos;
