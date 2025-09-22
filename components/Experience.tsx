
import React from 'react';
import { EXPERIENCE_ITEMS, EDUCATION_ITEMS } from '../constants';
import type { ExperienceItem } from '../types';

// Icon for work/project
const BriefcaseIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

// Icon for education
const GraduationCapIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0121 18.782V21M3 21v-2.218c0-1.02.6-1.938 1.5-2.458L12 14z" />
    </svg>
);


const Timeline: React.FC<{ items: ExperienceItem[]; icon: React.ReactNode }> = ({ items, icon }) => (
    <div className="relative border-l-2 border-secondary-light dark:border-secondary pl-12">
        {items.map((item, index) => (
            <div key={index} className="mb-10 relative">
                <div className="absolute -left-6 top-1 z-10 flex items-center justify-center bg-accent shadow-xl w-12 h-12 rounded-full ring-8 ring-primary-light dark:ring-primary">
                    {icon}
                </div>
                <div className="bg-secondary-light dark:bg-secondary rounded-lg shadow-xl w-full p-6 border border-accent/10 dark:border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-1000">
                    <p className="text-accent font-semibold mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{item.title}</h3>
                    <h4 className="text-base text-muted-light dark:text-muted font-medium mb-3">{item.company}</h4>
                    <p className="text-muted-light dark:text-muted leading-relaxed text-sm">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
);


const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-primary-light dark:bg-primary transition-colors duration-1000">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-dark dark:text-white">My Journey</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
                    <p className="max-w-3xl mx-auto text-lg text-muted-light dark:text-muted mt-6">A timeline of my personal projects and educational milestones.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
                    <div>
                        <h3 className="text-3xl font-bold text-dark dark:text-white text-center mb-12">Experience</h3>
                        <Timeline items={EXPERIENCE_ITEMS} icon={<BriefcaseIcon />} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-dark dark:text-white text-center mb-12">Education</h3>
                        <Timeline items={EDUCATION_ITEMS} icon={<GraduationCapIcon />} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;