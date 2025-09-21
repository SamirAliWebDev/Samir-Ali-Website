
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(13, 13, 43, 0.8), rgba(13, 13, 43, 1)), url('https://picsum.photos/seed/hero/1920/1080')"}}>
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img src="https://picsum.photos/seed/avatar/200/200" alt="Jane Doe" className="w-48 h-48 rounded-full border-4 border-accent shadow-xl object-cover" />
          <div className="md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Jane Doe
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              Data Analyst & Storyteller
            </p>
            <p className="max-w-2xl text-lg text-muted mb-8">
              Transforming complex datasets into actionable insights and compelling narratives that drive business growth.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#projects" className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg">
                View My Work
              </a>
              <a href="#contact" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
