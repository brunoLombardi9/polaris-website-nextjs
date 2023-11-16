import React from "react";
import LogoFooter from "./LogoPrincipal";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black h-[250px] w-full flex flex-col items-center justify-center gap-5 mt-auto">
      <Link href="/" className="w-[200px] md:w-[350px]">
        <LogoFooter />
      </Link>

      <p className="text-white text-center text-sm md:text-base px-2">
       Munro, Vicente Lopez. Buenos Aires, Argentina. Todos los derechos reservados ©.
      </p>
    </footer>
  );
};

export default Footer;
