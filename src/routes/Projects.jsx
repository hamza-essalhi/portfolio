import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import { FaLink } from 'react-icons/fa';

export default function Projects() {
  const [topImageIndexes, setTopImageIndexes] = useState(projects.map(() => 0));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const moveImageToBack = (projectIndex, direction) => {
    setTopImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const currentIndex = newIndexes[projectIndex];
      if (direction === 'left') {
        newIndexes[projectIndex] = currentIndex === 0 ? projects[projectIndex].images.length - 1 : currentIndex - 1;
      } else {
        newIndexes[projectIndex] = (currentIndex + 1) % projects[projectIndex].images.length;
      }
      return newIndexes;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTopImageIndexes(projects.map(() => 0));
  }, [windowWidth]);

  return (
    <section id="projects" className="projects flex flex-col items-center justify-center gap-4 mx-3 mt-16 mb-20">
      <motion.h1
        initial={{ x: '-20%', scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-sm:!text-lg"
      >
        Projects
      </motion.h1>

      <div className='flex gap-3 my-20 max-sm:my-2'>
        <div className="project-image-row">
          {projects.map((project, i) => (
            <motion.div
              initial={{ x: '-20%', scale: 0 }}
              whileInView={{ x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              key={i}
            >
              <div className='flex gap-1 my-20 max-sm:my-2 justify-between max-sm:flex-col max-sm:items-center'>
                <motion.p
                  initial={{ x: "-20%", scale: 0 }}
                  whileInView={{ x: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className='w-1/3 max-sm:w-10/12 flex flex-col gap-3 mt-10 '>
                  {project.desc}
                  <a href={project.link} className='py-5 flex items-center gap-2' >
                    <FaLink />{project.title}
                  </a>
                </motion.p>
                <div className="image-container flex max-sm:!max-w-full" >
                  {project.images.map((img, j) => (
                    <motion.img
                      key={j}
                      src={img}
                      alt={img}
                      className={`img mx-3 max-sm:!right-auto max-sm:!left-1 max-sm:!w-full `}
                      drag="x"
                      dragElastic={0}
                      initial={{ x: windowWidth<=700? topImageIndexes[i] * -windowWidth/1.05:topImageIndexes[i] * -windowWidth/2.1}}
                      animate={{ x: windowWidth<=700? topImageIndexes[i] * -windowWidth/1.05:topImageIndexes[i] * -windowWidth /2.1 }}
                      transition={{ type: 'tween', duration: 0.2 }}
                      onDragEnd={(event, info) => {
                        if (info.offset.x > 10) {
                          moveImageToBack(i, 'left');
                        } else if (info.offset.x < -10) {
                          moveImageToBack(i, 'right');
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
