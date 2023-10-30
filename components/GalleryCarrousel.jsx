import UseGetGalleryImages from "@/hooks/UseGetGalleryImages";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GalleryImage from "./GalleryImage";

const GalleryCarrousel = ({ content }) => {
  const images = UseGetGalleryImages(content);
  const sliderRef = useRef();

  function slideRight() {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 360;
    console.log(slider.scrollLeft);
  }

  function slideLeft() {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 360;
    console.log(slider.scrollLeft);
  }

  return (
    <>
      <div className="relative flex items-center min-h-[200px] max-w-[100vw]">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-full flex gap-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {images.length > 0 &&
            images.map((item) => <GalleryImage image={item} key={item} />)}
          {images.length > 0 &&
            images.map((item) => <GalleryImage image={item} key={item} />)}

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
