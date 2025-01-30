
import { useEffect, useState } from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import {motion,AnimatePresence} from "framer-motion"

import { BsArrowLeftSquare } from "react-icons/bs";
const Slider1 = () => {
    const LargeSlides = [
        {
          url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FbannerFile-1736145953866.jpg%3Fv%3D1736145958&w=1920&q=75",
        },
        {
          url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FDENIM.jpg%3Fv%3D1737441940&w=1920&q=75",
        },
        {
          url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FValentines_-_DESK_NEW.jpg%3Fv%3D1738065875&w=1920&q=75",
        },
      ];
      const [currentImage,setCurrentImage]=useState(0);
    const [images,setImages]=useState(LargeSlides);
    useEffect(()=>{
    const interval=setInterval(()=>
    {
        setCurrentImage((prev)=>(prev+1)%images.length)
    })
    })

    
    return (
        <div>
            <AnimatePresence>
                <motion.img
                key={currentImage}></motion.img>
            </AnimatePresence>

            

        </div>
    );
};

export default Slider1;