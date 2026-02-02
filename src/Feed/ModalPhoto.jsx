import React from 'react';

const ModalPhoto = ({ data }) => {
  if (!data) return null;

  const { photo, comments } = data;

  return (
    <div className="container">
      <img src={photo.src} alt="" />
    </div>
  );
};

export default ModalPhoto;
