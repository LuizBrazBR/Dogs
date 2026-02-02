import React, { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET_ID } from '../api';
import ModalPhoto from './ModalPhoto';

const FeedModal = ({ modal }) => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { endpoint, options } = PHOTO_GET_ID(modal.id);
    request(endpoint, options);
  }, [modal.id, request]);

  return <ModalPhoto data={data} />;
};

export default FeedModal;
