import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';
import type { Stat } from '../types';

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = stat.value;
                    if (start === end) return;

                    const duration = 2000;
                    const incrementTime = (duration / end);
                    
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) {
                            clearInterval(timer);
                        }
                    }, incrementTime);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [stat.value]);

    return (
        <div ref={ref} className="bg-secondary p-8 rounded-xl text-center border border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300">
            <p className="text-5xl font-extrabold text-accent">
                {count}{stat.suffix}
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