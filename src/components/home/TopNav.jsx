import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
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
          initial={{ y: navBackground ? -100 : 0 }}
          animate={{ y: navBackground ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >





          <div className="flex justify-between items-center w-4/5 max-sm:w-full">
            <Link
              to="home"
              smooth={true}
              offset={-70} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              About Me
            </Link>

            <Link
              to="projects"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Contact Me
            </Link>

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
          initial={{ y: !navBackground ? -100 : 0 }}
          animate={{ y: !navBackground ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center w-4/5 max-sm:w-full">
            <Link
              to="home"
              smooth={true}
              offset={-70} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              About Me
            </Link>

            <Link
              to="projects"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              offset={-150} // Adjust this value to fit your layout
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link" // Add a class for styling
            >
              Contact Me
            </Link>

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
