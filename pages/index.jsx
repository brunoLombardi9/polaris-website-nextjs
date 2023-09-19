import React from "react";
import artist from "../public/assets/images/aris-blanco-negro.jpg";
// import artist from "../public/assets/images/4CF9DD1B-C765-482E-966A-5E6CC85FB02E - copia.jpeg";
import redFlower from "../public/assets/images/flor roja.jpeg";
// import blackNWhiteFlower from "../public/assets/images/flor blanco y negro.jpeg";
import blackNWhiteFlower from "../public/assets/images/tabla.jpeg";
import { motion } from "framer-motion";
import UseGetAnimation from "../hooks/UseGetAnimation.jsx";
import LogoSvg from "../components/LogoSvg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const firstElement = UseGetAnimation();
  const secondElement = UseGetAnimation();
  const thirdElement = UseGetAnimation();
  const fourthElement = UseGetAnimation();
  const fifthElement = UseGetAnimation();
  const sixthElement = UseGetAnimation();
  const seventhElement = UseGetAnimation();

  return (
    <div className="w-full text-white mt-[30px]">
      <motion.div
        className="grid grid-cols-1 text-center py-10"
        ref={firstElement.ref}
        style={firstElement.animation}
      >
        <h1 className=" text-8xl text-white my-auto py-[50px]">Polaris studio</h1>
        {/* <p className=" text-2xl md:text-5xl mx-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          ratione eos voluptate ad aperiam.
        </p> */}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
        <Image
          src={artist}
          alt="tatuador en blanco y negro"
          className="h-full"
          ref={secondElement.ref}
          style={secondElement.animation}
        />

        <motion.div
          className="w-full my-auto py-5 md:py-0 flex flex-col justify-evenly md:max-h-[500px]"
          ref={thirdElement.ref}
          style={thirdElement.animation}
        >
          <LogoSvg />
          <p className="text-center text-2xl md:text-5xl mx-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            ratione eos voluptate ad aperiam.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-0">
        <Image
          src={blackNWhiteFlower}
          alt="tatuador en blanco y negro"
          className="h-full  md:order-2"
          ref={fourthElement.ref}
          style={fourthElement.animation}
        />

        <motion.div
          className="w-full my-auto py-5 md:py-0 flex flex-col justify-evenly md:max-h-[500px] md:order-1"
          ref={fifthElement.ref}
          style={fifthElement.animation}
        >
          <LogoSvg />
          <p className="text-center text-2xl md:text-5xl mx-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            ratione eos voluptate ad aperiam.
          </p>

          <Link href="/tattoo/blackwork" className="mx-auto mt-5">
            <button className="py-3 px-2 md:px-4 font-bold border-2 ease-in-out duration-200 rounded hover:border-orange hover:text-orange">
              Tattoos blackwork
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-0">
        <Image
          src={redFlower}
          alt="tatuador en blanco y negro"
          className="h-full"
          ref={sixthElement.ref}
          style={sixthElement.animation}
        />

        <motion.div
          className="w-full my-auto py-5 md:py-0 flex flex-col justify-evenly md:max-h-[500px]"
          ref={seventhElement.ref}
          style={seventhElement.animation}
        >
          <LogoSvg />
          <p className="text-center text-2xl md:text-5xl mx-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            ratione eos voluptate ad aperiam.
          </p>

          <Link href="/tattoo/color" className="mx-auto mt-5">
            <button className="py-3 px-2 md:px-4 font-bold border-2 ease-in-out duration-200 rounded hover:border-orange hover:text-orange">
              Tattoos a color
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
