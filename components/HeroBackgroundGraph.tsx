import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const FADE_OUT_DURATION_MS = 800;

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


// Generates a cleaner set of data points to create a less cluttered bar chart.
const generateChartData = (points = 60) => { // Reduced points for clarity
  const data = [];
  for (let i = 0; i < points; i++) {
    // A combination of sine waves and random noise for a more organic, financial-chart look
    const value = 
      20 + 
      (Math.sin(i / 5) * 15) + // Adjusted frequency for fewer points
      (Math.cos(i / 10) * 10) + 
      (Math.random() * 10);
    data.push({ v: Math.max(10, value) }); // Ensure a minimum height for bars
  }
  return data;
};

const Marker: React.FC<{ isFadingOut: boolean }> = ({ isFadingOut }) => (
  // The marker is positioned on the left (leading) edge of its parent container.
  // It moves along with the CSS animation.
  <div
    className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 transition-opacity duration-300 ${isFadingOut ? 'animate-marker-fade-out' : ''}`}
  >
    <div className="animate-pulse-marker">
      <div className="relative w-4 h-4">
        {/* Outer circle with a slight glow effect */}
        <div className="absolute w-full h-full rounded-full bg-accent opacity-50 ring-2 ring-white/50"></div>
        {/* Inner solid dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light"></div>
      </div>
    </div>
  </div>
);


const HeroBackgroundGraph: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const points = isMobile ? 30 : 60;
  const fullData = useMemo(() => generateChartData(points), [points]);
  
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const animationDuration = isMobile ? 2000 : 3200;

  useEffect(() => {
    // This timer starts the marker's fade-out animation just as the reveal animation finishes.
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, animationDuration);

    // This timer removes the marker from the DOM after its fade-out animation is complete.
    const completeTimer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, animationDuration + FADE_OUT_DURATION_MS);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [animationDuration]);

  const animationClass = isMobile ? 'animate-grow-width-mobile' : 'animate-grow-width';

  return (
    <div className="w-full h-full relative">
        {/* This container animates the graph reveal from right to left */}
        <div className={`absolute top-0 right-0 h-full ${animationClass} overflow-hidden`}>
            <div className="absolute top-0 right-0 h-full w-screen">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={fullData}
                        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                        barCategoryGap="20%" // Increased gap between bars for a cleaner look
                    >
                        <defs>
                            <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3671E9" stopOpacity={0.6}/>
                                <stop offset="95%" stopColor="#3671E9" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <Bar
                            dataKey="v"
                            fill="url(#colorGraph)"
                            isAnimationActive={false}
                            radius={[2, 2, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            {/* Marker is now inside the animated container to move with it */}
            {!isAnimationComplete && <Marker isFadingOut={isFadingOut} />}
        </div>
    </div>
  );
};

export default HeroBackgroundGraph;