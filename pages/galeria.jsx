import UseGetAnimation from '@/hooks/UseGetAnimation';
import UseGetCollection from '@/hooks/UseGetCollection';
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Galeria = () => {
    const allItems = UseGetCollection("galeria");
    const [content, setContent] = useState([]);
    const { ref, animation } = UseGetAnimation();

  return (
    <div className="w-full text-white mt-[30px]">
    <motion.h1
      className="text-center text-8xl md:text-9xl font-bold"
      ref={ref}
      style={animation}
    >
      Galería
    </motion.h1>

    <motion.p
      className="text-center md:text-2xl mt-5 md:max-w-[500px] mx-auto"
      style={{ ...animation, transition: animation.transition + "0.2s" }}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
      similique.
    </motion.p>

    <input type="file" />
   
  </div>
  )
}

export default Galeria