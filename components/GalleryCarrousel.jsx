import UseGetGalleryImages from "@/hooks/UseGetGalleryImages";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const GalleryCarrousel = ({ content }) => {
  const images = UseGetGalleryImages(content);
  const sliderRef = useRef();

  function slideRight() {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  function slideLeft() {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {images.length > 0 &&
            images.map((item) => (
              <img
                className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item}
                key={item}
                alt="/"
              />
            ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default GalleryCarrousel;
