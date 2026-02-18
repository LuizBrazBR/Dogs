import React from "react";

import styles from "./PhotoComments.module.css";
import PhotoCommentForm from "./PhotoCommentForm";

const PhotoComments = ({ comments }) => {
  console.log(comments);

  if (!comments.length) return;

  return (
    <div className={styles.comments}>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </div>
        );
      })}

      <PhotoCommentForm />
    </div>
  );
};

export default PhotoComments;
