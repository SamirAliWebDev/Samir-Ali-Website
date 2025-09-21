import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  
  // An element is "in view" when it's in the central 30% of the viewport.
  // This focuses the user on one section at a time.
  const isInView = useInView(ref, { 
    margin: "-35% 0px -35% 0px",
    once: false 
  });

  return (
    <motion.div
      ref={ref}
      // The section is always rendered, which fixes the blank page issue.
      // Its visual properties are animated based on whether it is in the viewport's center.
      initial={false}
      animate={{ 
        opacity: isInView ? 1 : 0.2, // Active section is fully visible, others are faded.
        filter: isInView ? 'blur(0px)' : 'blur(4px)', // Active section is sharp, others are blurred.
        scale: isInView ? 1 : 0.95 // Active section is full size, others are slightly smaller.
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
