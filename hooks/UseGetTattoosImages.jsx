import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../utils/firebase";

const UseGetTattoosImages = (document) => {
  const [images, setImages] = useState([]);


  async function getImageUrl() {
    const imagesArray = [];

    document.images.forEach(async (picture) => {
      try {
        const imageRef = ref(storage, picture);
        const url = await getDownloadURL(imageRef);
        imagesArray.push(url);
      } catch (error) {
        console.log(error);
      }
      setImages(imagesArray);
    });
  }

  useEffect(() => {
    getImageUrl();
  }, []);

  return images;
};

export default UseGetTattoosImages;
