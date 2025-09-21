import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-6 border-t border-secondary">
      <div className="container mx-auto px-6 text-center text-muted">
        <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;