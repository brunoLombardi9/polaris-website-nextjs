import React, { useEffect, useState } from "react";
import UseGetCollection from "../../hooks/UseGetCollection";
import TattoosCard from "../../components/TattoosCard";
import { motion } from "framer-motion";
import UseGetAnimation from "../../hooks/UseGetAnimation";
import { useRouter } from "next/router";
import Link from "next/link";

const TattooView = () => {
  const allTattoos = UseGetCollection("tattoos");
  const [content, setContent] = useState([]);
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category || "todos");
  const { ref, animation } = UseGetAnimation();
  const options = ["todos", "blackwork", "color"];

  useEffect(() => {
    if (allTattoos.length > 0) {
      category === "todos"
        ? setContent(allTattoos)
        : setContent(
            allTattoos.filter((tattoo) => tattoo.category === category)
          );
    }
  }, [category, allTattoos]);

  useEffect(() => {
    setCategory(router.query.category);
  }, [router.query.category]);

  return (
    <div className="w-full text-white mt-[30px]">
      <motion.h1
        className="text-center text-8xl md:text-9xl font-bold"
        ref={ref}
        style={animation}
      >
        Tattoo
      </motion.h1>

      <motion.p
        className="text-center mt-5 md:max-w-[500px] mx-auto"
        style={{ ...animation, transition: animation.transition + "0.2s" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        similique, eos nesciunt aliquam unde sit libero perferendis consequuntur
        vero pariatur.
      </motion.p>
      <motion.div
        className="w-full flex justify-center items-center gap-5 my-8"
        style={{ ...animation, transition: animation.transition + "0.4s" }}
      >
        {options.map((opt) => (
          <Link href={`/tattoo/${opt}`} key={opt}>
            <button
              className={`py-3 w-[100px] font-bold border-2 ease-in-out duration-200 rounded ${
                category === opt
                  ? "border-orange text-orange"
                  : "hover:border-orange hover:text-orange"
              }`}
            >
              {opt[0].toUpperCase() + opt.slice(1)}
            </button>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center p-5 "
        style={{ ...animation, transition: animation.transition + "0.6s" }}
      >
        {content.length > 0 ? (
          content.map((tattoo) => (
            <TattoosCard obj={tattoo} key={tattoo.title} />
          ))
        ) : (
          <h2 className="text-center">No se encontraron resultados</h2>
        )}
      </motion.div>
    </div>
  );
};

export default TattooView;
