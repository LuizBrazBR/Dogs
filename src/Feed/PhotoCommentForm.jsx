import React, { useState } from "react";
import Enviar from "../../src/Assets/enviar.svg?react";
import useFetch from "../Hooks/useFetch";
import { COMMENT_POST } from "../api";

const PhotoCommentForm = ({ id, setComment }) => {
  const { request } = useFetch();

  const [value, setValue] = useState(null);

  async function handleClick(e) {
    e.preventDefault();

    const { endpoint, options } = COMMENT_POST(id, { comment: value });
    const { json, response } = await request(endpoint, options);
    if (response.ok) {
      setComment((prev) => [...prev, json]);
      setValue("");
    }
  }

  return (
    <form onSubmit={handleClick}>
      <textarea
        name="comment"
        id="comment"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></textarea>
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentForm;
