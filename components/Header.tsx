
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-2xl font-bold text-white tracking-wider">
          JD<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-light hover:text-accent transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/90 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-4 py-4">
                {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-light hover:text-accent transition-colors duration-300">
                    {link.name}
                    </a>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
