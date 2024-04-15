import React from 'react'
import { motion } from "framer-motion"
import certifications from '../data/certification.json'
import alxImg from "../images/17-short-specializations-certificate-hamza-essalhi (1).png"

export default function AboutMe() {
  return (
    <section id="about" className="flex gap-4 mx-3 mt-16 flex-col items-center about">
        <div className="flex flex-col flex-1 items-center">
          <motion.h1
            initial={{ x: "-20%", scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className='my-20 max-sm:!text-lg'>
            About Me
          </motion.h1>
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

                        src={certification.title === "ALX Full Stack Software Engineering | Front-end" ? alxImg : certification.img}
                        alt={certification.title}
                        className="hover-img"
                        whileHover={{ scale: 1.2 }}

                      />

                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>

        </div>
      </section>
  )
}
