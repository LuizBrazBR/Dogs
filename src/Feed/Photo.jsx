import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET_ID } from "../api";
import ModalPhoto from "./ModalPhoto";
import Spinner from "../Components/Spinner";
import Error from "../Components/Error";

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

  if (loading) return <Spinner />;
  if (error) return <Error>{error}</Error>;

  return <ModalPhoto single={true} data={data} />;
};

export default Photo;
