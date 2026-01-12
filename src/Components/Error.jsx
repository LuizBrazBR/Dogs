import React from "react";

const Error = ({ children }) => {
  return (
    <p
      style={{ color: "red", marginBlock: "1rem" }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default Error;
