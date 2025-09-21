
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white">Let's Connect</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        <p className="max-w-2xl mx-auto text-lg text-muted my-8">
          I'm currently seeking new opportunities and am open to freelance projects. If you have a project in mind, a question, or just want to say hello, feel free to reach out.
        </p>
        <a href="mailto:john.doe@example.com" className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg text-lg">
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;