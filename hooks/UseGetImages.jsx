import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../utils/firebase";

const UseGetImages = (document, collectionName) => {
  const [images, setImages] = useState([]);

  async function getImageUrl() {
    const imagesArray = [];

    document.images.forEach(async (picture) => {
      try {
        const imageRef = ref(storage, `${collectionName}/${picture}`);
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

export default UseGetImages;
