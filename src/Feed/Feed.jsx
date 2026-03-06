import React, { useState } from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

const Feed = () => {
  const [modal, setModal] = useState(null);

  const [pages, setPage] = useState([1]);

  return (
    <>
      {modal && <FeedModal modal={modal} setModal={setModal} />}

      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            setModal={setModal}
            page={page}
            setPage={setPage}
          />
        );
      })}
    </>
  );
};

export default Feed;
