import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TopNav() {
  const [navBackground, setNavBackground] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.2; // 20% of the window height

      if (scrollPosition > threshold) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to update the animation key whenever navBackground changes
  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [navBackground]);

  return (
    <>
      {navBackground ? (
        <motion.nav
          key={animationKey}
          className="flex gap-3 justify-center items-center p-5 w-full bg"
          initial={{ y: navBackground ? -100:0 }}
          animate={{ y: navBackground ? 0:-100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center w-4/5 max-sm:w-full">
            <NavLink  to="/">
              Home
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <div className="w-2/6 flex justify-end">
              <button className="rounded-full p-3">
                <span className="max-sm:hidden">Download Cv</span>{' '}
                <FaDownload className="hidden max-sm:block" />
              </button>
            </div>
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          key={animationKey}
          className="flex gap-3 justify-center items-center p-5 w-full"
          initial={{ y: !navBackground ? -100:0 }}
          animate={{ y: !navBackground ? 0:-100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center w-4/5 max-sm:w-full">
            <NavLink  to="/">
              Home
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <div className="w-2/6 flex justify-end">
              <button className="rounded-full p-3">
                <span className="max-sm:hidden">Download Cv</span>{' '}
                <FaDownload className="hidden max-sm:block" />
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  );
}
