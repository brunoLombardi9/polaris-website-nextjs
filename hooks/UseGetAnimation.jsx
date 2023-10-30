import React, { useRef } from "react";
import UseIsVisible from "./UseIsVisible";


const UseGetAnimation = () => {
  const ref = useRef(null);
  const isInView = UseIsVisible(ref)

  const animation = {
    transform: isInView ? "none" : "translateY(120px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  return { ref, animation };
};

export default UseGetAnimation;
