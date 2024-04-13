import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import { FaXTwitter } from 'react-icons/fa6';
import certifications from '../data/certification.json'
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

  const handleHover = (event) => {
    
    // Animate the image to the center
    event.target.style.position = 'fixed';
    event.target.style.top = `5%`;
    event.target.style.left = `10%`;
    event.target.style.zIndex = 9999;
    event.target.style.width = `90%`;
    event.target.style.transform = `translate(-50%, -50%) scale(1.1)`;

  };

  const handleHoverEnd = (event) => {
    // Reset the image position when hover ends
    event.target.style.position = 'static';
    event.target.style.top = 'auto';
    event.target.style.left = 'auto';
    event.target.style.zIndex = 'auto';
    event.target.style.width = `100%`;
  };

  return (
    <div className='home mx-10 max-sm:mx-3'>
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
      </div>
      <div className="flex gap-4 mx-3 mt-16 flex-col items-center about">
        <div className="flex flex-col flex-1 items-center">
          <motion.h1
          initial={{ x: "-20%", scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
            className='my-20 max-sm:!text-lg'>About Me</motion.h1>
          <motion.p 
          initial={{ x: "-20%", scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className=''>Hello! I'm Hamza, a 24-year-old full-stack web developer based in Casablanca. I hold a university degree in Analytical Chemistry and Environment, along with a Bachelor's Degree in Physical Science and Chemistry. I specialize in the MERN stack, crafting dynamic and interactive web applications. I'm passionate about learning and have completed various certifications in web development, including front-end, full-stack JavaScript, and Python programming. My goal is to create efficient, scalable, and user-friendly applications that leave a positive impact.</motion.p>
          <motion.h1
          initial={{ x: "-20%", scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }} className='my-20 max-sm:!text-lg'>Certifications</motion.h1>

          <div className="certifications flex flex-col gap-5">
            {
              certifications.map((certification, i) => (
                <motion.div
              
          initial={{ x: "-20%", scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
                 key={i} className={`flex gap-10 w-full max-md:!justify-normal ${i % 2 === 0 ? "justify-end" : "justify-normal"}`}>
                  <div className="certification p-3 w-2/4 flex flex-col gap-5 max-lg:w-2/3 max-sm:!w-full">
                    <a href={certification.link} className="my-5">{certification.title}</a>
                    <div className="image-container relative">
                      <motion.img

                        src={certification.img}
                        alt={certification.title}
                        className="hover-img"
                        whileHover={{ scale:1.2}}
                       
                      />

                    </div>
                  </div>
                </motion.div>
              ))
            }
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
