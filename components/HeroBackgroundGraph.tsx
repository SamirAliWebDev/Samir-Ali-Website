import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

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

// Generates the initial set of random data points for the bar chart.
const generateInitialChartData = (points: number) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    // Start with a random value within a reasonable range
    const value = 10 + Math.random() * 30;
    data.push({ v: value });
  }
  return data;
};

const HeroBackgroundGraph: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const points = isMobile ? 30 : 75;
  
  const [data, setData] = useState(() => generateInitialChartData(points));

  useEffect(() => {
    // Reset data whenever the number of points changes (e.g., on resize)
    setData(generateInitialChartData(points));

    let animationFrameId: number;
    let lastUpdateTime = 0;
    // A slightly slower interval creates a more deliberate, less frantic animation
    const updateInterval = 200; 

    // Animation loop using requestAnimationFrame for efficiency
    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateTime > updateInterval) {
        lastUpdateTime = timestamp;
        setData(currentData => 
          currentData.map(point => {
            // Each bar moves up or down by a small random amount
            let newValue = point.v + (Math.random() * 8 - 4);
            // Clamp the value to ensure bars don't get too tall or too short
            newValue = Math.max(10, Math.min(45, newValue));
            return { v: newValue };
          })
        );
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation frame when the component unmounts or effect re-runs
    return () => cancelAnimationFrame(animationFrameId);
  }, [points]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          barCategoryGap="10%"
        >
          <defs>
            <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3671E9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3671E9" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <Bar
            dataKey="v"
            fill="url(#colorGraph)"
            isAnimationActive={true}
            animationDuration={200}
            animationEasing="ease-in-out"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeroBackgroundGraph;
