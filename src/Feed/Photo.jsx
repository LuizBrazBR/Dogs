import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET_ID } from "../api";
import ModalPhoto from "./ModalPhoto";
import Spinner from "../Components/Spinner";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET_ID(id);
    async function callApi() {
      await request(endpoint, options);
    }
    callApi();
  }, [id, request]);

  {
    loading && <Spinner />;
  }

  {
    error && <Error>{error}</Error>;
  }

  return <ModalPhoto data={data} />;
};

export default Photo;
