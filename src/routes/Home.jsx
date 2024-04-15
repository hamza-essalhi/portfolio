import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import { FaXTwitter } from 'react-icons/fa6';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';


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
            initial={{ x: "-20%" - i * Math.floor(Math.random() * (20 - 0)) }}
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
    <div className='home mx-10 max-sm:mx-3'>
      <section id="home" className="top flex flex-col items-center justify-center gap-5 mx-3" >
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
          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3 icon-content'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center gap-2'>
              <FaFacebookF className='text-3xl icon max-sm:text-3xl' />
              <span className="max-sm:hidden icon-text">
                @hamzaessalhi
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.1,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3 icon-content'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center gap-2'>
              <FaInstagram className='text-3xl icon max-sm:text-3xl' />
              <span className="max-sm:hidden icon-text">
                @hamzaessalhi
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.2,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3 icon-content'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center gap-2'>
              <FaXTwitter className='text-3xl icon max-sm:text-3xl' />
              <span className="max-sm:hidden icon-text">
                @hamzaessalhi
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.3,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3 icon-content'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center gap-2'>
              <FaLinkedin className='text-3xl icon max-sm:text-3xl' />
              <span className="max-sm:hidden icon-text">
                @hamzaessalhi
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{
              delay: 0.4,
              duration: 1, // Change this to control the overall duration of the animation
              ease: "easeInOut", // You can experiment with different easing functions
            }}
            className='flex gap-2 items-center p-3 icon-content'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center gap-2'>
              <FaGithub className='text-3xl icon max-sm:text-3xl' />
              <span className="max-sm:hidden icon-text">
                @hamzaessalhi
              </span>
            </motion.div>
          </motion.div>


        </div>
        <div className='flex flex-col mt-10'>
          <div className='flex justify-center'>
            {renderLetters()}
          </div>
          <div className='flex gap-6 mt-20 items-center max-md:flex-col'>
            <motion.h3
              initial={{ x: "-20%", scale: 0 }}
              whileInView={{ x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'>
              Experienced freelance full-stack web developer specializing in the MERN Stack. A MERN developer specializes in creating web applications using MongoDB, Express.js, React.js, and Node.js. They build dynamic and interactive websites, handling both front-end and back-end development tasks. MERN developers are skilled in JavaScript and utilize these technologies to design efficient and scalable applications.
            </motion.h3>
            <div className='flex items-center gap-4 map flex-1 '>

              <motion.img
                initial={{ x: "-20%", scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className='max-sm:!w-16 max-sm:!h-16' src="/img/mongodb.png" alt="/img/mongodb.png" />

              <motion.img
                initial={{ x: "-20%", scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className=' max-sm:!w-16 max-sm:!h-16' src="/img/express.png" alt="/img/express.png" />

              <motion.img
                initial={{ x: "-20%", scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className=' max-sm:!w-16 max-sm:!h-16' src="/img/physics.png" alt="/img/physics.png" />

              <motion.img
                initial={{ x: "-20%", scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className=' max-sm:!w-16 max-sm:!h-16' src="/img/programing.png" alt="/img/programing.png" />
            </div>
          </div>
        </div>
      </section>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      
      
    </div>
  );
}
