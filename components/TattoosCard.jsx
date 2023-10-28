import React, { useState } from "react";
import Modal from "./Modal";
import UseGetTattoosImages from "../hooks/UseGetTattoosImages";
import Image from "next/image";
import ImageLoader from "./ImageLoader";

const TattoosCard = ({ obj }) => {
  const images = UseGetTattoosImages(obj);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="text-darkGray flex justify-center items-center w-[300px] h-[400px] ">
        {loading && <ImageLoader />}
        <Image
          src={images[0]}
          width={400} 
          height={400}
          alt={obj.title}
          className={`${
            loading && "hidden"
          } h-full  rounded cursor-pointer hover:opacity-25 ease-in-out duration-200`}
          onClick={handleModal}
          onLoad={() => setLoading(false)}
        />
      </div>

      {showModal && (
        <Modal obj={obj} handleModal={handleModal} images={images} />
      )}
    </>
  );
};

export default TattoosCard;
