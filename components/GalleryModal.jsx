import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ImageLoader from "./ImageLoader";
import styles from "./css/TattooCard.module.css";

const GalleryModal = ({ image, closeModal }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm z-20">
      <div
        className={`flex justify-center items-center relative m-4 shadow-2xl  bg-black rounded ${
          loading ? "h-[400px] w-[300px]" : styles.modal
        }`}
      >
        <AiOutlineCloseCircle
          onClick={closeModal}
          size={30}
          className="fill-orange absolute right-[-15px] top-[-15px] cursor-pointer"
        />

        {loading && <ImageLoader />}
        <img
          src={image}
          alt={"imagen galería"}
          className={`${loading && "hidden"} h-full w-full rounded`}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default GalleryModal;
