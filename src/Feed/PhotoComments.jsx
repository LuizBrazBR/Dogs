import React, { useContext, useEffect, useRef, useState } from "react";

import styles from "./PhotoComments.module.css";
import PhotoCommentForm from "./PhotoCommentForm";
import { UserContext } from "../UserContext";

const PhotoComments = ({ comments, photo }) => {
  const [comment, setComment] = useState(comments);
  const { login } = useContext(UserContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [comment]);

  return (
    <div className={styles.comments}>
      <div className={styles.section} ref={inputRef}>
        {comment.map((comment) => {
          return (
            <div key={comment.comment_ID} className={styles.comment}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </div>
          );
        })}
      </div>

      {login && (
        <PhotoCommentForm
          id={photo.id}
          setComment={setComment}
          className={styles.PhotoCommentForm}
        />
      )}
    </div>
  );
};

export default PhotoComments;
