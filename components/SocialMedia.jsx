import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  const socialMedia = [
    {
      media: "Instagram",
      url: "https://www.instagram.com/polaris.tattoo.club/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      component: <BsInstagram size={30} />,
    },
    {
      media: "Facebook",
      url:"https://www.facebook.com/AAGM03?mibextid=LQQJ4d",
      component: <BsFacebook size={30} />,
    },
    {
      media: "Whatsapp",
      url: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CLIENT_NUM }`,
      component: <BsWhatsapp size={30} />,
    },
    {
      media: "YouTube",
      url: `https://www.youtube.com/@aris3786`,
      component: <BsYoutube size={30} />,
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
            {element.component}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
