import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import UseGetImages from "../hooks/UseGetImages";
import Image from "next/image";

const TattoosCard = ({ obj }) => {
  const images = UseGetImages(obj, "tattoos");
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="text-darkGray flex justify-center items-center">
        {images.length > 0 && (
          <Image
            src={images[0]}
            width={400}
            height={400}
            alt={obj.title}
            className="h-full lg:max-h-[80%] w-full cursor-pointer hover:opacity-25 ease-in-out duration-200"
            onClick={handleModal}
            loading="lazy"
          />
        )}
      </div>

      {showModal && (
        <Modal obj={obj} handleModal={handleModal} images={images} />
      )}
    </>
  );
};

export default TattoosCard;
