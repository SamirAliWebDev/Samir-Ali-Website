import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import { STATS } from '../constants';
import type { Stat } from '../types';

// Hook to check for media queries, defined locally.
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

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            
            const controls = animate(0, stat.value, {
                duration: isMobile ? 1.5 : 2,
                onUpdate(value) {
                    node.textContent = Math.round(value).toString() + stat.suffix;
                },
            });

            return () => controls.stop();
        }
    }, [isInView, stat.value, stat.suffix, isMobile]);

    return (
        <div className="bg-secondary p-8 rounded-xl text-center border border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300">
            <p 
                ref={ref}
                className="text-5xl font-extrabold text-accent"
            >
                0{stat.suffix}
            </p>
            <p className="text-muted mt-2 text-lg">{stat.label}</p>
        </div>
    );
}


const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;