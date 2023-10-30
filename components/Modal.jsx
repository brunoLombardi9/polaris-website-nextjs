import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ImageLoader from "./ImageLoader";
import styles from "./css/TattooCard.module.css"

const Modal = ({ obj, handleModal, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoading(true);
  }

  function handlePrevious() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setLoading(true);
  }

  return (
    <div className="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm z-20">
      <div className={`flex justify-center items-center relative m-4 shadow-2xl ${styles.tattooCard} bg-black rounded `}>
        <AiOutlineCloseCircle
          onClick={handleModal}
          size={30}
          className="fill-orange absolute right-[-15px] top-[-15px] cursor-pointer"
        />

        {loading && <ImageLoader />}
        <img
          src={images[currentIndex]}
          alt={obj.title}
          className={`${loading && "hidden"} h-full w-full rounded`}
          onLoad={() => setLoading(false)}
        />

        {hasPrevious && !loading && (
          <BsFillArrowLeftCircleFill
            size={40}
            className="absolute top-[50%] left-[-30px] md:left-[-50px] fill-white hover:fill-orange ease-in-out duration-150"
            onClick={handlePrevious}
          />
        )}

        {hasNext && !loading && (
          <BsFillArrowRightCircleFill
            size={40}
            className="absolute top-[50%] right-[-30px] md:right-[-50px] fill-white hover:fill-orange ease-in-out duration-150"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
