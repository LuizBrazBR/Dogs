import React, { useEffect, useState } from 'react';
import Enviar from '../../src/Assets/enviar.svg?react';
import useFetch from '../Hooks/useFetch';
import { COMMENT_POST } from '../api';

const INITIAL = { comment: '' };

const PhotoCommentForm = ({ photo, setComment }) => {
  const { id } = photo;

  const { request, data } = useFetch();

  const [value, setValue] = useState(INITIAL);

  useEffect(() => {
    if (data) {
      console.log('Data mudou:', data);
      setComment((prev) => [...prev, data]);
    }
  }, [data, setComment]);

  async function handleClick(e) {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    const { endpoint, options } = COMMENT_POST(id, token, value);
    request(endpoint, options);
    setValue(INITIAL);
  }

  return (
    <form onSubmit={handleClick}>
      <textarea
        name="comment"
        id="comment"
        onChange={(e) => {
          setValue({ ...value, comment: e.target.value });
        }}
        value={value.comment}
      ></textarea>
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentForm;
