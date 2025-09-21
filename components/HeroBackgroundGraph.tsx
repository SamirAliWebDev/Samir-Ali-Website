import React, { useState, useEffect, useMemo } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const TOTAL_POINTS = 100;
const GROW_INTERVAL_MS = 32; // How quickly new points are added (32ms * 100 points = 3.2s total animation time)
const FADE_OUT_DURATION_MS = 800; // Duration of the marker fade-out animation

// Generate a full set of data points for one animation cycle
const generateFullData = (length = TOTAL_POINTS) => {
  return Array.from({ length }, () => ({ v: 30 + Math.random() * 40 }));
};

// Custom dot component to render only the "head" of the graph as a marker
const GrowingDot = (props: any) => {
  const { cx, cy, index, dataLength, isAnimating, isFadingOut } = props;

  // Only render the dot for the last data point while the graph is growing or fading out
  if (!isAnimating || index !== dataLength - 1 || dataLength === 0) {
    return null;
  }
  
  const pulseClass = 'animate-pulse-marker';
  const fadeOutClass = 'animate-marker-fade-out';

  return (
    <g className={isFadingOut ? fadeOutClass : ''}>
      <circle cx={cx} cy={cy} r="8" fill="#3671E9" stroke="#F8F9FA" strokeWidth="2" opacity="0.5" />
      <circle cx={cx} cy={cy} r="4" fill="#F8F9FA" className={isFadingOut ? '' : pulseClass} />
    </g>
  );
};

const HeroBackgroundGraph: React.FC = () => {
  const fullData = useMemo(() => generateFullData(), []);
  const [displayData, setDisplayData] = useState<{v: number}[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const intervalId = window.setInterval(() => {
      setDisplayData(prev => {
        const nextLength = prev.length + 1;
        
        if (nextLength <= fullData.length) {
          const isFinished = nextLength === fullData.length;
          if (isFinished) {
            clearInterval(intervalId);
            setIsFadingOut(true);
            // After the fade animation completes, set isAnimating to false to remove the dot component.
            timeoutId = window.setTimeout(() => {
              setIsAnimating(false);
            }, FADE_OUT_DURATION_MS);
          }
          return fullData.slice(0, nextLength);
        }

        // Failsafe to stop the interval if something goes wrong
        clearInterval(intervalId);
        return prev;
      });
    }, GROW_INTERVAL_MS);

    // Cleanup interval and timeout on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [fullData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart 
        data={displayData} 
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3671E9" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#3671E9" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke="#3671E9"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGraph)"
          isAnimationActive={false}
          dot={<GrowingDot dataLength={displayData.length} isAnimating={isAnimating} isFadingOut={isFadingOut} />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HeroBackgroundGraph;