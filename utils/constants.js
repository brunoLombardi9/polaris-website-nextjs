import artist from "../public/assets/images/aris-blanco-negro.jpg";
import redFlower from "../public/assets/images/flor roja.jpeg";
import blackNWhiteFlower from "../public/assets/images/flor blanco y negro.jpeg";
import skateboard from "../public/assets/images/tabla.jpeg";

export const homeGridData = [
  {
    imageSrc: artist,
    altText: "Tatuador",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
  },
  {
    imageSrc: blackNWhiteFlower,
    altText: "Tatuaje flor blanco y negro",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Tattoo blackwork",
    linkHref: "/tattoo/blackwork",
  },
  {
    imageSrc: redFlower,
    altText: "Tatuaje flor roja",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Tattoo a color",
    linkHref: "/tattoo/color",
  },
  {
    imageSrc: skateboard,
    altText: "Tabla de skate pintada",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Galería",
    linkHref: "/galeria",
  },
];

export const animations200 = "transition-all ease-in-out duration-200";
export const animations150 = "transition-all ease-in-out duration-150";
export const animations300 = "transition-all ease-in-out duration-300";
