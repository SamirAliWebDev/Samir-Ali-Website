import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  
  // Trigger the animation once when the element is 20% in view for better performance.
  const isInView = useInView(ref, { 
    amount: 0.2,
    once: true 
  });

  // Animation variants for a smooth fade-in and slide-up effect
  const variants = {
    hidden: { 
      opacity: 0,
      y: 50, // Start 50px below its final position
    },
    visible: {
      opacity: 1,
      y: 0, // End at its final position
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;