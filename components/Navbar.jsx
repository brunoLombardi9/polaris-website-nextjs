import React, { useEffect, useRef, useState } from "react";
import "./css/Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import UseGetVerticalPosition from "../hooks/UseGetVerticalPosition";
import LogoNav from "./LogoNav";
import granularEffect from "../public/assets/images/granularEffect.png";
import wallpaper from "../public/assets/images/tattooHand.jpg";
import goUp from "../utils/goUp";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { animations150, animations300 } from "@/utils/constants";

const Navbar = () => {
  const navRef = useRef();
  const [nav, setNav] = useState(false);
  const verticalPosition = UseGetVerticalPosition();
  const transparency = verticalPosition <= 50 ? "md:bg-transparent" : "";
  const pathname = useRouter().pathname;
  const navOptions = [
    { name: "tattoo", url: "/tattoo/todos" },
    { name: "galeria", url: "/galeria" },
    { name: "contacto", url: "/contacto" },
  ];

  function closeNav() {
    setNav(false);
    goUp();
  }

  function handleClickOutside(e) {
    if (nav && !navRef.current.contains(e.target)) {
      setNav(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed w-full gap-4 md:gap-8 py-2 md:p-5 bg-black ${transparency} text-white ${animations300} z-10`}
      >
        <div className="md:absolute top-2 left-0 w-fit">
          <Link href="/" onClick={closeNav}>
            <LogoNav/>
          </Link>
        </div>

        <nav
          className={`${
            nav ? "max-h-[500px] opacity-100" : "max-h-0 md:max-h-max opacity-0"
          } flex flex-col md:flex-row justify-center overflow-hidden md:opacity-100 gap-4 md:gap-8 ${animations300} `}
        >
          {navOptions.map((option) => (
            <Link
              key={option.name}
              href={option.url}
              className={`text-xl navOption ms-4 ${
                pathname.split("/")[1] === option.name && "active"
              }`}
              onClick={closeNav}
            >
              {option.name}
            </Link>
          ))}
        </nav>

        <BiMenuAltRight
          size={40}
          color="white"
          className={`absolute top-5 md:hidden right-3 hover:fill-orange ${animations150} cursor-pointer`}
          onClick={() => setNav(!nav)}
        />
      </header>

      {pathname !== "/" ? (
        <div className="w-full flex h-[100px]">
          <Image
            src={granularEffect}
            alt="granular effect"
            className="w-full object-cover hidden md:block"
          />
        </div>
      ) : (
        // <div className="h-[300px] md:h-[450px] wallpaper flex flex-col justify-center"></div>
        <Image
          src={wallpaper}
          alt="tatuador"
          className="h-[450px] hidden md:block object-cover w-full"
          priority={true}
        />
      )}
    </>
  );
};

export default Navbar;
