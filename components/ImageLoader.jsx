import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const ImageLoader = () => {
  return (
      <FadeLoader
        color={"#fff"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
};

export default ImageLoader;
