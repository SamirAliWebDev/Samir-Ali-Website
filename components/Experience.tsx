import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Experience & Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-secondary hidden md:block"></div>

          {EXPERIENCE.map((item, index) => (
            <div key={index} className="mb-12 flex justify-between items-center w-full flex-col md:flex-row">
              {/* Left side */}
              <div className="order-1 md:w-5/12"></div>

              {/* Center dot */}
              <div className="z-10 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>

              {/* Right side */}
              <div className={`order-1 bg-secondary rounded-lg shadow-xl w-full md:w-5/12 p-6 border border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-300`}>
                <p className="text-accent font-semibold mb-2">{item.date}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-lg text-muted font-medium mb-3">{item.company}</h4>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;