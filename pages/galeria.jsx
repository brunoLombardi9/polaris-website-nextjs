import GalleryCarrousel from "@/components/GalleryCarrousel";
import Loader from "@/components/Loader";
import UseGetAnimation from "@/hooks/UseGetAnimation";
import UseGetCollection from "@/hooks/UseGetCollection";
import React, { useEffect, useState } from "react";

const Galeria = () => {
  const allItems = UseGetCollection("gallery");
  const [artItems, setArtItems] = useState([]);
  const [merchItems, setMerchItems] = useState([]);
  const { ref, animation } = UseGetAnimation();

  console.log(artItems)

  useEffect(() => {
    const artArray = allItems.filter((item) => item.category === "arte");
    const merchArray = allItems.filter((item) => item.category === "merch");

    setArtItems(artArray);
    setMerchItems(merchArray);
  }, [allItems]);

  return (
    <div className="w-full text-white mt-[30px]">
      <h1
        className="text-center text-8xl md:text-9xl font-bold"
        ref={ref}
        style={animation}
      >
        Galería
      </h1>

      <p
        className="text-center md:text-2xl mt-5 md:max-w-[500px] mx-auto"
        style={{ ...animation, transition: animation.transition + "0.2s" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        similique.
      </p>

      <div
        className="flex flex-col mt-[70px] mb-[70px] gap-[30px] md:gap-[70px] justify-center items-center"
        style={{ ...animation, transition: animation.transition + "0.4s" }}
      >
        {artItems.length > 0 && merchItems.length > 0 ? (
          <div className="flex flex-col gap-12">
            <h2 className="text-center font-bold text-5xl">Merch</h2>
            <GalleryCarrousel content={artItems} />
            <h2 className="text-center font-bold text-5xl">Arte</h2>
            <GalleryCarrousel content={merchItems} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Galeria;
