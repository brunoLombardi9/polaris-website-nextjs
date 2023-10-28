import React, { useEffect, useState } from "react";
import UseGetCollection from "../../hooks/UseGetCollection";
import UseGetAnimation from "../../hooks/UseGetAnimation";
import { useRouter } from "next/router";
import Link from "next/link";
import ItemsView from "@/components/ItemsView";
import Loader from "@/components/Loader";

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
      <h1
        className="text-center text-8xl md:text-9xl font-bold"
        ref={ref}
        style={animation}
      >
        Tattoo
      </h1>

      <p
        className="text-center md:text-2xl mt-5 md:max-w-[500px] mx-auto"
        style={{ ...animation, transition: animation.transition + "0.2s" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        similique.
      </p>
      <div
        className="w-full flex justify-center items-center gap-2 md:gap-5 my-8"
        style={{ ...animation, transition: animation.transition + "0.4s" }}
      >
        {options.map((opt) => (
          <Link href={`/tattoo/${opt}`} key={opt}>
            <button
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
      </div>

      <div
        className="w-full mb-5 flex flex-col justify-center items-center"
        style={{ ...animation, transition: animation.transition + "0.6s" }}
      >
        {content.length > 0 ? (
          <ItemsView content={content} />
        ) : (
          <div className="m-[70px]">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default TattooView;
