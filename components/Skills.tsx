import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const chartData = SKILL_CATEGORIES.flatMap(cat => cat.skills).map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100
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
          <div className="bg-secondary p-6 rounded-lg border border-accent/20 flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-2xl font-bold text-white mb-4">Skills Proficiency</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3671E9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3671E9" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <PolarGrid stroke="#828282" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#F8F9FA' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'none' }} axisLine={{ stroke: 'none' }} />
                <Radar name="Proficiency" dataKey="A" stroke="#3671E9" fill="url(#colorUv)" fillOpacity={0.6} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(13, 13, 43, 0.9)', 
                    borderColor: '#3671E9' 
                  }}
                  labelStyle={{ color: '#F8F9FA' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;