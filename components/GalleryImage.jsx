import React, { useState } from "react";
import ImageLoader from "./ImageLoader";
import GalleryModal from "./GalleryModal";

const GalleryImage = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  console.log(image);
  return (
    <>
      {loading && (
        <div className="w-[300px] flex justify-center items-center">
        <ImageLoader />
        </div>
      )}

      <img
        className={`${
          loading && "hidden"
        } h-auto w-[110px] md:w-[240px] cursor-pointer hover:scale-105 ease-in-out duration-300`}
        src={image}
        key={image}
        onLoad={() => setLoading(false)}
        onClick={() => setModal(true)}
        alt="/"
      />
      {modal && (
        <GalleryModal image={image} closeModal={() => setModal(false)} />
      )}
    </>
  );
};

export default GalleryImage;
