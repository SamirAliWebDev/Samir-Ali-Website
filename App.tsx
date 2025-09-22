import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-primary-light dark:bg-primary min-h-screen overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-primary opacity-50 z-0 dark:opacity-50 opacity-0 transition-opacity duration-1000"></div>
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <AnimatedSection><Stats /></AnimatedSection>
            <AnimatedSection><About /></AnimatedSection>
            <Skills />
            <AnimatedSection><Projects /></AnimatedSection>
            <AnimatedSection><Experience /></AnimatedSection>
            <AnimatedSection><Contact /></AnimatedSection>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;