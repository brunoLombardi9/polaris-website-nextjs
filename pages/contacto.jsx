import React from "react";
import UseGetAnimation from "../hooks/UseGetAnimation";
import ContactForm from "../components/ContactForm.jsx";
import SocialMedia from "../components/SocialMedia.jsx";
import "../components/css/Contacto.css";

const Contacto = () => {
  const { ref, animation } = UseGetAnimation();
  return (
    <div className="w-full text-white mt-[30px]">
      <h1
        className="text-center text-8xl md:text-9xl mb-7"
        ref={ref}
        style={animation}
      >
        Contacto
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 wallpaper py-10 wallpaperContacto opacity-20"
        style={{ ...animation, transition: animation.transition + "0.2s" }}
      >
        <SocialMedia />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
