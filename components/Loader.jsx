import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
      <PuffLoader
        color={"#fff"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
};

export default Loader;
