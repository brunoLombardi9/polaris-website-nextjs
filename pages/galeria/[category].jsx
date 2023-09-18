import React, { useEffect, useState } from "react";
import UseGetCollection from "../../hooks/UseGetCollection";
import { motion } from "framer-motion";
import UseGetAnimation from "../../hooks/UseGetAnimation";
import { useRouter } from "next/router";
import Link from "next/link";

const Galeria = () => {
  const allItems = UseGetCollection("galeria");
  const [content, setContent] = useState([]);
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category || "todos");
  const { ref, animation } = UseGetAnimation();
  const options = ["todos", "arte", "flashes", "merch"];

  useEffect(() => {
    if (allItems.length > 0) {
      category === "todos"
        ? setContent(allItems)
        : setContent(allItems.filter((item) => item.category === category));
    }
  }, [category, allItems]);

  useEffect(() => {
    setCategory(router.query.category);
  }, [router]);

  return (
    <div className="w-full text-white mt-[30px]">
      <motion.h1
        className="text-center text-8xl md:text-9xl font-bold"
        ref={ref}
        style={animation}
      >
        Galería
      </motion.h1>

      <motion.p
        className="text-center md:text-2xl mt-5 md:max-w-[500px] mx-auto"
        style={{ ...animation, transition: animation.transition + "0.2s" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        similique.
      </motion.p>
      <motion.div
        className="w-full flex justify-center items-center gap-2 md:gap-5 my-8"
        style={{ ...animation, transition: animation.transition + "0.4s" }}
      >
        {options.map((opt) => (
          <Link href={`/galeria/${opt}`} key={opt}>
            <button
              key={opt}
              value={opt}
              className={`py-3 px-2 md:px-4 font-bold border-2 ease-in-out duration-200 rounded ${
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
        {allItems.length > 0 ? "contenido" : "cargando"}
      </motion.div>
    </div>
  );
};

export default Galeria;
