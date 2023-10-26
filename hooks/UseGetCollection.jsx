import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const UseGetCollection = (collectionName) => {
  const [data, setData] = useState([]);

  async function fetchTattoos() {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const documentsData = querySnapshot.docs.map((doc) => doc.data());
      setData(documentsData);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  }

  useEffect(() => {
    fetchTattoos();
  }, []);

  return data;
};

export default UseGetCollection;
