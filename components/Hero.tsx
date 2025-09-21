import React from 'react';
import HeroBackgroundGraph from './HeroBackgroundGraph';

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

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const materializeClass = isMobile ? 'animate-materialize-mobile' : 'animate-materialize';

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden" style={{backgroundImage: "linear-gradient(rgba(13, 13, 43, 0.8), rgba(13, 13, 43, 1))"}}>
      
      {/* Animated Graph Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <HeroBackgroundGraph />
      </div>

      <div className="absolute inset-0 z-0 opacity-50">
        <div 
          className="absolute top-1/4 -left-24 w-72 h-72 rounded-full animate-float-1" 
          style={{ 
            background: 'radial-gradient(circle, rgba(54, 113, 233, 0.25) 0%, transparent 70%)',
            willChange: 'transform' 
          }}>
        </div>
        <div 
          className="absolute bottom-0 -right-24 w-96 h-96 rounded-full animate-float-2" 
          style={{ 
            background: 'radial-gradient(circle, rgba(19, 19, 52, 0.8) 0%, transparent 70%)',
            willChange: 'transform' 
          }}>
        </div>
        <div 
          className="absolute bottom-1/4 -right-12 w-64 h-64 rounded-full animate-pulse-slow" 
          style={{ 
            background: 'radial-gradient(circle, rgba(54, 113, 233, 0.25) 0%, transparent 70%)',
            animationDelay: '2s', 
            willChange: 'opacity, transform' 
          }}>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img 
            src="https://i.postimg.cc/QdRrrYvR/Remove-background-project.png" 
            alt="Samir Ali" 
            className={`w-48 h-48 rounded-full border-4 border-accent shadow-xl object-cover bg-secondary ${materializeClass}`} 
          />
          <div className="md:text-left">
            <h1 
              className={`text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 ${materializeClass}`}
              style={{ animationDelay: '300ms' }}
            >
              Samir Ali
            </h1>
            <p 
              className={`text-2xl md:text-3xl text-accent font-semibold mb-6 ${materializeClass}`}
              style={{ animationDelay: '600ms' }}
            >
              Data Analyst
            </p>
            <p 
              className={`max-w-2xl text-lg text-muted mb-8 ${materializeClass}`}
              style={{ animationDelay: '900ms' }}
            >
              Detail-oriented Data Analyst with 12 months of experience in data cleaning, analysis, and visualization using Python, SQL, and Power BI.
            </p>
            <div 
              className={`flex justify-center md:justify-start space-x-4 ${materializeClass}`}
              style={{ animationDelay: '1200ms' }}
            >
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