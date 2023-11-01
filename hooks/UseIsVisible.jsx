import React, { useEffect, useState } from "react";

const UseIsVisible = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasIntersected) {
      setHasIntersected(true);
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (!hasIntersected) {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [hasIntersected]);

  return isIntersecting;
};

export default UseIsVisible;
