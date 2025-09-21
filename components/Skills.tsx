import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Hook to check for media queries, defined locally
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

const chartData = SKILL_CATEGORIES.flatMap(cat => cat.skills).map(skill => ({
    subject: skill.name,
    Proficiency: skill.level,
}));


const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-secondary p-6 rounded-lg border border-accent/20">
    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {category.skills.map((skill) => (
        <div key={skill.name} className="flex items-center space-x-3">
          <skill.icon className="w-8 h-8 text-accent" />
          <span className="text-muted">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);


const Skills: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const yAxisWidth = isMobile ? 100 : 150;
  const yAxisTickSize = isMobile ? 11 : 14;
  const barThickness = isMobile ? 24 : 22;
  const chartMinHeight = isMobile ? '360px' : '480px';

  return (
    <section id="skills" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Technical Skills</h2>
           <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {SKILL_CATEGORIES.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
          <div 
            className="bg-secondary p-6 rounded-lg border border-accent/20 flex flex-col items-center justify-center"
            style={{ minHeight: chartMinHeight }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Skills Proficiency</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={chartData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="colorBar" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#3671E9" stopOpacity={0.9}/>
                        <stop offset="95%" stopColor="#80A5F5" stopOpacity={0.9}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#828282" horizontal={false} strokeOpacity={0.2} />
                    <XAxis type="number" domain={[0, 100]} hide={true} />
                    <YAxis 
                        dataKey="subject" 
                        type="category" 
                        tick={{ fill: '#F8F9FA', fontSize: yAxisTickSize }} 
                        axisLine={false} 
                        tickLine={false}
                        width={yAxisWidth}
                    />
                    <Tooltip 
                        cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                        contentStyle={{ 
                        backgroundColor: 'rgba(13, 13, 43, 0.9)', 
                        borderColor: '#3671E9',
                        borderRadius: '0.5rem',
                        boxShadow: '0 0 10px rgba(54, 113, 233, 0.5)'
                        }}
                        labelStyle={{ color: '#F8F9FA', fontWeight: 'bold' }}
                        itemStyle={{ color: '#80A5F5' }}
                    />
                    <Bar 
                        dataKey="Proficiency" 
                        fill="url(#colorBar)" 
                        radius={[0, 4, 4, 0]} 
                        barSize={barThickness} 
                        isAnimationActive={true}
                        animationDuration={1500}
                        animationEasing="ease-out"
                    />
                </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;