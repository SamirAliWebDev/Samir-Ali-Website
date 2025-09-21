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
  
  // An element is "in view" when it's in the central 30% of the viewport.
  // This focuses the user on one section at a time.
  const isInView = useInView(ref, { 
    margin: "-35% 0px -35% 0px",
    once: false 
  });

  // FIX: Refactored to use variants to resolve a TypeScript error with the `initial` prop.
  // This approach is more idiomatic for framer-motion and better handled by TypeScript.
  const variants = {
    visible: isMobile
      ? { // Mobile-friendly animations (less resource-intensive)
          opacity: 1,
        }
      : { // Desktop animations with blur and scale
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
        },
    hidden: isMobile
      ? {
          opacity: 0.3,
        }
      : {
          opacity: 0.2,
          filter: 'blur(4px)',
          scale: 0.95,
        },
  };

  return (
    <motion.div
      ref={ref}
      // The section is always rendered, which fixes the blank page issue.
      // Its visual properties are animated based on whether it is in the viewport's center.
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: isMobile ? 0.4 : 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;