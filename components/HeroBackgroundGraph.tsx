import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const ANIMATION_DURATION_MS = 3200;
const FADE_OUT_DURATION_MS = 800;

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
  const fullData = useMemo(() => generateChartData(), []);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // This timer starts the marker's fade-out animation just as the reveal animation finishes.
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, ANIMATION_DURATION_MS);

    // This timer removes the marker from the DOM after its fade-out animation is complete.
    const completeTimer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, ANIMATION_DURATION_MS + FADE_OUT_DURATION_MS);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
        {/* This container animates the graph reveal from right to left */}
        <div className="absolute top-0 right-0 h-full animate-grow-width overflow-hidden">
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