import React from "react";

const Loading = () => {
  return (
      <div
        class="spinner-grow text-primary d-flex justify-content-center"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
  );
};

export default Loading;
