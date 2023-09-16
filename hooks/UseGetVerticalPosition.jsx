import React, { useEffect, useState } from "react";

const UseGetVerticalPosition = () => {
  const [Y, setY] = useState(0);

  function handlePosition(){
    setY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  return Y;
};

export default UseGetVerticalPosition;