import React from "react";
import { homeGridData } from "@/utils/constants";
import HomeGrids from "@/components/HomeGrids";
import UseGetAnimation from "@/hooks/UseGetAnimation";
import Head from "next/head";
import LogoFooter from "@/components/LogoPrincipal";

const Home = () => {
  const titleRef = UseGetAnimation();

  let imageSide = "left";
  homeGridData.forEach((grid) => {
    grid.imageSide = imageSide;
    imageSide === "left" ? (imageSide = "right") : (imageSide = "left");
  });

  return (
    <>
      <Head>
        <title>Polaris TattooClub - Home</title>
      </Head>

      <main className="max-w-full text-white mt-[30px]">
        <div
          className="grid grid-cols-1 text-center py-10"
          ref={titleRef.ref}
          style={titleRef.animation}
        >
          {/* <h1 className=" text-8xl text-white my-auto py-[50px]">
            Polaris studio
          </h1> */}

      <div className="w-[300px] md:w-[600px] m-auto mt-[50px] md:mt-0">
      <LogoFooter/>
      </div>
        </div>

        {homeGridData.map((grid) => (
          <HomeGrids content={grid} key={grid.altText} />
        ))}
      </main>
    </>
  );
};

export default Home;
