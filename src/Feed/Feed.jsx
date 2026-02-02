import React, { useState } from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';

const Feed = () => {
  const [modal, setModal] = useState(null);

  return (
    <>
      {modal && <FeedModal modal={modal} />}
      <FeedPhotos setModal={setModal} />
    </>
  );
};

export default Feed;
