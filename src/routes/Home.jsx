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
  const renderLetters = () => {
    const letters = [];
    const delayPerLetter = 0.1; // Adjust this for the desired delay between each letter

    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        letters.push(<span className="mx-3" key={i}>{" "}</span>);
      } else {
        letters.push(
          <motion.h1
            key={i}
            className='max-sm:!text-lg animated-letter mx-1'
            initial={{ x: -200 - i * Math.floor(Math.random() * (20 - 0)) }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            style={{ marginLeft: `${i * delayPerLetter}s` }} // Delay for each letter
          >
            {name[i]}
          </motion.h1>
        );
      }
    }
    return letters;
  };
  return (
    <div className='home mx-3'>
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
        <div className='flex flex-col mt-10'>
          <div className='flex justify-center'>
            {renderLetters()}
          </div>
          <div className='flex gap-2 mt-20'>
            <h3 className='flex-1'>
              Experienced Freelance Full-Stack Web Developer Specializing in the MERN Stack
            </h3>
            <div className='flex flex-col items-center gap-4 map flex-1'>
              <div className='w-full flex justify-end'>
              <img className=' max-sm:!w-20' src="/img/mongodb.png" alt="/img/mongodb.png" />
              </div>
              <img className=' max-sm:!w-20' src="/img/express.png" alt="/img/express.png" />
              <div className='w-full flex justify-end'>
              <img className=' max-sm:!w-20' src="/img/physics.png" alt="/img/physics.png" />
              </div>
             
              <img className=' max-sm:!w-20' src="/img/node-js.png" alt="/img/node-js.png" />
            </div>
          </div>
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
