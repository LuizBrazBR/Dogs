import React, { useContext, useState } from 'react';

import styles from './PhotoComments.module.css';
import PhotoCommentForm from './PhotoCommentForm';
import { UserContext } from '../UserContext';

const PhotoComments = ({ comments, photo }) => {
  const [comment, setComment] = useState(comments);
  const { login } = useContext(UserContext);

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

      {login && <PhotoCommentForm photo={photo} setComment={setComment} />}
    </div>
  );
};

export default PhotoComments;
