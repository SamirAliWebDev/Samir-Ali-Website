
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light dark:bg-primary py-6 border-t border-secondary-light dark:border-secondary transition-colors duration-1000">
      <div className="container mx-auto px-6 text-center text-muted-light dark:text-muted">
        <p>&copy; {new Date().getFullYear()} Samir Ali. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;