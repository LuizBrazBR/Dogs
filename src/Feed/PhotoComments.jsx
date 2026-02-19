import React, { useState } from 'react';

import styles from './PhotoComments.module.css';
import PhotoCommentForm from './PhotoCommentForm';

const PhotoComments = ({ comments, photo }) => {
  const [comment, setComment] = useState(comments);

  return (
    <div className={styles.comments}>
      <div>
        {comment.map((comment) => {
          return (
            <div key={comment.comment_ID} className={styles.comment}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </div>
          );
        })}
      </div>

      <PhotoCommentForm photo={photo} setComment={setComment} />
    </div>
  );
};

export default PhotoComments;
