import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Modal = ({ obj, handleModal, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrevious() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <div className="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm z-20">
      <div className="relative m-4 shadow-2xl md:top-10">
        <AiOutlineCloseCircle
          onClick={handleModal}
          size={30}
          className="fill-orange absolute right-[-15px] top-[-15px] cursor-pointer"
        />
        <img
          src={images[currentIndex]}
          alt={obj.title}
          className="h-[400px] md:h-[500px] rounded"
        />

        {hasPrevious && (
          <BsFillArrowLeftCircleFill
            size={40}
            className="absolute top-[50%] left-[-30px] md:left-[-50px] fill-white hover:fill-orange ease-in-out duration-150"
            onClick={handlePrevious}
          />
        )}

        {hasNext && (
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
