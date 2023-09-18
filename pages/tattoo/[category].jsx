import React, { useEffect, useState } from "react";
import UseGetCollection from "../../hooks/UseGetCollection";
import { motion } from "framer-motion";
import UseGetAnimation from "../../hooks/UseGetAnimation";
import { useRouter } from "next/router";
import Link from "next/link";
import ItemsView from "@/components/ItemsView";

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
  }, [router]);

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
        className="w-full mb-5"
        style={{ ...animation, transition: animation.transition + "0.6s" }}
      >
        <ItemsView content={content} />
      </motion.div>
    </div>
  );
};

export default TattooView;
