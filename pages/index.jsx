import React from "react";
import { homeGridData } from "@/utils/constants";
import HomeGrids from "@/components/HomeGrids";
import UseGetAnimation from "@/hooks/UseGetAnimation";
import Head from "next/head";

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

      <main className="w-full text-white mt-[30px]">
        <div
          className="grid grid-cols-1 text-center py-10"
          ref={titleRef.ref}
          style={titleRef.animation}
        >
          <h1 className=" text-8xl text-white my-auto py-[50px]">
            Polaris studio
          </h1>
        </div>

        {homeGridData.map((grid) => (
          <HomeGrids content={grid} key={grid} />
        ))}
      </main>
    </>
  );
};

export default Home;
