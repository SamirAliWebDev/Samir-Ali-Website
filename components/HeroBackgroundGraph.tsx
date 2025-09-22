import React, { useMemo } from 'react';

// Hook to check for media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
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

const HeroBackgroundGraph: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const points = isMobile ? 30 : 70;

  const bars = useMemo(() => {
    return Array.from({ length: points }).map((_, i) => ({
      // Random duration between 3s and 8s for variety
      duration: `${3 + Math.random() * 5}s`,
      // Random delay up to 5s to de-synchronize the animations
      delay: `-${Math.random() * 5}s`,
    }));
  }, [points]);

  return (
    <div className="w-full h-full flex items-end justify-around overflow-hidden" aria-hidden="true">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-[1%] bg-gradient-to-t from-accent/30 to-accent/60 dark:from-accent/40 dark:to-accent/80 rounded-t-full animate-fluctuate"
          style={{
            animationDuration: bar.duration,
            animationDelay: bar.delay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            willChange: 'height',
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackgroundGraph;