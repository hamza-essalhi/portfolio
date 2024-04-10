import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BouncingIcon = ({ icon }) => {
  const iconSize = 50;
  const dragConstraints = {
    left: 0,
    right: window.innerWidth - iconSize,
    top: 0,
    bottom: window.innerHeight - iconSize,
  };

  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - iconSize),
    y: Math.random() * (window.innerHeight - iconSize),
    vx: 2 * (Math.random() - 0.5), // Initial velocity in x direction
    vy: 2 * (Math.random() - 0.5), // Initial velocity in y direction
  });

  const [size, setSize] = useState(iconSize); // State for the icon size
  const [className, setClassName] = useState(""); // State for the icon size
  const [isIdea, setIsIdea] = useState(true); // State to toggle between idea.png and idea-of.png

  const updatePosition = () => {
    setPosition((prevPosition) => {
      let { x, y, vx, vy } = prevPosition;

      x += vx;
      y += vy;

      // Bounce back if hitting the edges
      if (x <= 0) {
        x = 0;
        vx *= -1;
      }
      if (x + size >= window.innerWidth) {
        x = window.innerWidth - size;
        vx *= -1;
      }
      if (y <= 0) {
        y = 0;
        vy *= -1;
      }
      if (y + size >= window.innerHeight) {
        y = window.innerHeight - size;
        vy *= -1;
      }

      // Bounce back at 98% of the viewport width
      if (x >= window.innerWidth * 0.94) {
        x = window.innerWidth * 0.94;
        vx *= -1;
      }

      return { x, y, vx, vy };
    });
  };

  const handleDragEnd = (event, info) => {
    let finalX = position.x + info.offset.x;
    let finalY = position.y + info.offset.y;

    // Check if final position is within drag constraints
    finalX = Math.max(0, Math.min(finalX, window.innerWidth - size));
    finalY = Math.max(0, Math.min(finalY, window.innerHeight - size));

    // Adjust the velocity based on drag distance - decrease the multiplier for slower speed
    setPosition({
      ...position,
      x: finalX,
      y: finalY,
      vx: info.offset.x * 0.05, // Slower drag speed
      vy: info.offset.y * 0.05,
    });
  };

  // Update position every 16ms (roughly 60fps)
  useEffect(() => {
    const interval = setInterval(updatePosition, 16);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const getRandomSize = () => {
      const min = 20;
      const max = 40;
      const size = Math.floor(Math.random() * (max - min + 1)) + min;
      return size;
    };

    const newSize = getRandomSize();
    setSize(newSize);
  }, []); // Run only once on mount
  useEffect(() => {
    const getRandomAnimation = () => {
      const classNames = ["react-icon", "react-icon-speed", "react-icon-super-speed"];
      const randomIndex = Math.floor(Math.random() * classNames.length);
      return classNames[randomIndex];
    };
  
    if(icon === "/img/physics.png" || icon=== '/img/structure.png') {
      const newClassName = getRandomAnimation();
    setClassName(newClassName);
    }
  }, [icon]);
  useEffect(() => {
    if (icon === '/img/idea.png') {
      const interval = setInterval(() => {
        setIsIdea((prevIsIdea) => !prevIsIdea);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [icon]);

  let currentIcon = icon;
  if (icon === '/img/idea.png') {
    currentIcon = isIdea ? '/img/idea.png' : '/img/idea-of.png';
  }


 
  return (
    <div className='random-icons'>
      <motion.img
        initial={{ x: -3000 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{
          duration: 1, // Change this to control the overall duration of the animation
          ease: "easeInOut", // You can experiment with different easing functions
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: position.y,
          left: position.x,
        }}
        drag
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className={icon === "/img/physics.png" || icon=== '/img/structure.png' ? `row max-sm:!max-w-5 max-sm:!max-h-5 ${className}` : 'row max-sm:!max-w-5 max-sm:!max-h-5'}
        src={currentIcon}
        alt={currentIcon}
      />
    </div>
  );
};

export default BouncingIcon;
