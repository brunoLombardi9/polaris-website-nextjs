import UseGetAnimation from "@/hooks/UseGetAnimation";
import Image from "next/image";
import React from "react";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { animations200 } from "@/utils/constants";

const HomeGrids = ({ content }) => {
  const textPart = UseGetAnimation();
  const imagePart = UseGetAnimation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div
        className={`${
          content.imageSide === "left" ? "md:order-1" : "md:order-2"
        } h-full`}
      >
        <Image
          src={content.imageSrc}
          alt="tatuador en blanco y negro"
          ref={imagePart.ref}
          style={imagePart.animation}
          priority={true}
        />
      </div>

      <div
        className={`${
          content.imageSide === "right" ? "md:order-1" : "md:order-2"
        } w-full my-auto py-5 md:py-0 flex flex-col justify-evenly md:max-h-[500px]`}
        ref={textPart.ref}
        style={textPart.animation}
      >
        <LogoSvg />
        <p className="text-center text-2xl md:text-5xl mx-4">{content.text}</p>

        {content.buttonText && (
          <Link href={content.linkHref} className="mx-auto mt-5">
            <button
              className={`py-3 px-2 md:px-4 font-bold border-2 ${animations200} rounded hover:border-orange hover:text-orange`}
            >
              {content.buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeGrids;
