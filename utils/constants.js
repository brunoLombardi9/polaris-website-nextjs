import artist from "../public/assets/images/aris-blanco-negro.jpg";
import redFlower from "../public/assets/images/flor roja.jpeg";
import blackNWhiteFlower from "../public/assets/images/flor blanco y negro.jpeg";
import skateboard from "../public/assets/images/tabla.jpeg";

export const homeGridData = [
  {
    imageSide: "left",
    imageSrc: artist,
    altText: "Tatuador",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
  },
  {
    imageSide: "right",
    imageSrc: blackNWhiteFlower,
    altText: "Tatuaje flor blanco y negro",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Tattoo blackwork",
    linkHref: "/tattoo/blackwork",
  },
  {
    imageSide: "left",
    imageSrc: redFlower,
    altText: "Tatuaje flor roja",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Tattoo a color",
    linkHref: "/tattoo/color",
  },
  {
    imageSide: "right",
    imageSrc: skateboard,
    altText: "Tabla de skate pintada",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ratione eos voluptate ad aperiam.",
    buttonText: "Galería",
    linkHref: "/galeria",
  },
];
