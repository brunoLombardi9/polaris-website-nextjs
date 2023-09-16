import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => {
  const socialMedia = [
    {
      media: "Instagram",
      url: "https://www.instagram.com",
      component: () => <BsInstagram size={30} />,
    },
    {
      media: "Facebook",
      url: "https://www.facebook.com",
      component: () => <BsFacebook size={30} />,
    },
    {
      media: "Whatsapp",
      url: "https://www.whatsapp.com",
      component: () => <BsWhatsapp size={30} />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center  mb-6">
      <h2 className="text-center hidden md:block text-3xl">
        Podés contactarnos en todas nuestras redes sociales:
      </h2>

      <div className="flex gap-8 mt-8">
        {socialMedia.map((element) => (
          <a
            key={element.media}
            href={element.url}
            target="_blank"
            className="p-2 border-2 border-white rounded hover:border-orange hover:bg-orange transition-all ease-in-out duration-150"
          >
            {element.component()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
