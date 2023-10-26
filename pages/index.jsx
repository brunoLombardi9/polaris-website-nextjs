import React from "react";
import { motion } from "framer-motion";
import { homeGridData } from "@/utils/constants";
import HomeGrids from "@/components/HomeGrids";
import UseGetAnimation from "@/hooks/UseGetAnimation";

const Home = () => {
  const titleRef = UseGetAnimation();

  return (
    <main className="w-full text-white mt-[30px]">
      <motion.div
        className="grid grid-cols-1 text-center py-10"
        ref={titleRef.ref}
        style={titleRef.animation}
      >
        <h1 className=" text-8xl text-white my-auto py-[50px]">
          Polaris studio
        </h1>
      </motion.div>

      {homeGridData.map((grid) => (
        <HomeGrids content={grid} key={grid} />
      ))}
    </main>
  );
};

export default Home;
