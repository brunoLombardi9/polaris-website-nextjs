import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../utils/firebase";

const UseGetGalleryImages = (array) => {
  const [images, setImages] = useState([]);

  async function getImageUrl() {
    const imagesUrl = [];
    array.forEach((obj) => imagesUrl.push(...obj.images));

    try {
      const promises = imagesUrl.map(async (picture) => {
        const imageRef = ref(storage, picture);
        const url = await getDownloadURL(imageRef);
        return url;
      });

      const imagesArray = await Promise.all(promises);
      setImages(imagesArray);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getImageUrl();
  }, [array]);

  return images;
};


export default UseGetGalleryImages;
