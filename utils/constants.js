import artist from "../public/assets/images/aris-blanco-negro.jpg";
import redFlower from "../public/assets/images/flor roja.jpeg";
import blackNWhiteFlower from "../public/assets/images/flor blanco y negro.jpeg";
import skateboard from "../public/assets/images/tabla.jpeg";

export const homeGridData = [
  {
    imageSrc: artist,
    altText: "Tatuador",
    text: "Los tatuajes son una forma popular de autoexpresión. y lo han sido desde el principio de las eras.",
  },
  {
    imageSrc: blackNWhiteFlower,
    altText: "Tatuaje flor blanco y negro",
    text: "Diseños realizados únicamente con tinta negra para crear piezas oscuras que contrastan con la piel.",
    buttonText: "Tattoo blackwork",
    linkHref: "/tattoo/blackwork",
  },
  {
    imageSrc: redFlower,
    altText: "Tatuaje flor roja",
    text: "Tattoos a color con lienas gruesas y finas, estilo Tradicional y NewTradicional.",
    buttonText: "Tattoo a color",
    linkHref: "/tattoo/color",
  },
  {
    imageSrc: skateboard,
    altText: "Tabla de skate pintada",
    text: "« No hay reglas en el arte » Francisco de Goya",
    buttonText: "Galería",
    linkHref: "/galeria",
  },
  {
    imageSrc: skateboard,
    altText: "Tabla de skate pintada",
    text: "Estudio privado y club de arte. Espacio de libre imaginación, alta frecuencia y vibración. Desde 2018",
  },
];

export const animations200 = "transition-all ease-in-out duration-200";
export const animations150 = "transition-all ease-in-out duration-150";
export const animations300 = "transition-all ease-in-out duration-300";
