import React, { useState } from 'react';
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
      if (x + iconSize >= window.innerWidth) {
        x = window.innerWidth - iconSize;
        vx *= -1;
      }
      if (y <= 0) {
        y = 0;
        vy *= -1;
      }
      if (y + iconSize >= window.innerHeight) {
        y = window.innerHeight - iconSize;
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
    finalX = Math.max(0, Math.min(finalX, window.innerWidth - iconSize));
    finalY = Math.max(0, Math.min(finalY, window.innerHeight - iconSize));

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
  React.useEffect(() => {
    const interval = setInterval(updatePosition, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div  className='random-icons'>
    <motion.img
    initial={{ x: -3000 }}
    animate={{ x: 0 }}
    exit={{ x: -300 }}
    transition={{
        delay:1.6,
      duration: 1, // Change this to control the overall duration of the animation
      ease: "easeInOut", // You can experiment with different easing functions
    }}

      style={{
        top: position.y,
        left: position.x,
      }}
      
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      className='row'
      src={icon} alt=""
    />
      
    </div>
  );
};

export default BouncingIcon;
