import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

// Hook to check for media queries, defined locally to avoid creating new files.
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

const AnimatedSection: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // An element is "in view" when it's in the central 60% of the viewport.
  // This provides a larger trigger area, making the focus effect smoother.
  const isInView = useInView(ref, { 
    margin: "-20% 0px -20% 0px",
    once: false 
  });

  // Restored the `scale` animation for a "focus" effect on desktop.
  const variants = {
    visible: isMobile
      ? { // Mobile-friendly animation (just opacity)
          opacity: 1,
        }
      : { // Desktop animation with a scale effect
          opacity: 1,
          scale: 1,
        },
    hidden: isMobile
      ? {
          opacity: 0.6, // Make unfocused sections a bit more visible
        }
      : {
          opacity: 0.6,
          scale: 0.98, // A subtle scale-down for unfocused sections
        },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: isMobile ? 0.5 : 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;