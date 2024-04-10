import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion"
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  const [spinDegree, setSpinDegree] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll position value as needed
      const spinIncrement = 5; // Change this value to adjust the spin speed

      if (scrollPosition > 0) {
        const newDegree = Math.floor(scrollPosition / spinIncrement) * spinIncrement / 8;
        setSpinDegree(newDegree);
      } else {
        setSpinDegree(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const name = "HAMZA ESSALHI";
  return (
    <div className='home'>
      <div className="top flex flex-col items-center justify-center gap-5 mx-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{

            duration: 1, // Change this to control the overall duration of the animation
            ease: "easeInOut", // You can experiment with different easing functions
          }}

          className="image-container  flex justify-center w-8/12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.5, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className="circle" style={{ transform: `rotate(${spinDegree}deg)translate(240%)rotate(${spinDegree}deg)` }}></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.5, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }} className="circle " style={{ transform: `rotate(${spinDegree}deg)translate(-240%)rotate(${spinDegree}deg)` }}></motion.div>
          <motion.img
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{

              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            src="/img/Designer.png" alt="" className="w-1/2" />
        </motion.div>
        <div className='flex flex-col icons gap-3 mr-5 max-sm:!relative max-sm:flex-row'>
          <motion.span
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{

              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3'><FaFacebookF className='text-3xl icon max-sm:text-3xl' />
            <span className="max-sm:hidden icon-text">
              @hamzaessalhi
            </span>
          </motion.span>
          <motion.span
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.1,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3'><FaInstagram className='text-3xl icon max-sm:text-3xl' />
            <span className="max-sm:hidden icon-text">
              @hamzaessalhi
            </span>
          </motion.span>

          <motion.span
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.2,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3'><FaXTwitter className='text-3xl icon max-sm:text-3xl' />
            <span className="max-sm:hidden icon-text">
              @hamzaessalhi
            </span>
          </motion.span>

          <motion.span
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.3,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3'><FaLinkedin className='text-3xl icon max-sm:text-3xl' />
            <span className="max-sm:hidden icon-text">
              @hamzaessalhi
            </span>
          </motion.span>

          <motion.span
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.4,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3'><FaGithub className='text-3xl icon max-sm:text-3xl' />
            <span className="max-sm:hidden icon-text">
              @hamzaessalhi
            </span>
          </motion.span>


        </div>
        <div className='flex'>

          {name.split("-").map((letter, index) => (
            <motion.h1
              initial={{ x: -200 - index * Math.floor(Math.random() * (20 - 0)), opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className='max-sm:!text-lg animated-letter'
            >
              {letter}
            </motion.h1>
          ))}
        </div>
      </div>
      <div className="middel flex gap-4 mx-3 mt-16">
          <div className="col flex-1">1</div>
          <div className="col flex-1">2</div>
          <div className="col flex-1">3</div>
      </div>
    </div>
  );
}
