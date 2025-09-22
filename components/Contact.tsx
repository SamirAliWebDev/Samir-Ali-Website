

import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});

  const validateForm = () => {
      const newErrors: { name?: string, email?: string, message?: string } = {};
      if (!name.trim()) newErrors.name = 'Name is required.';
      if (!email.trim()) {
          newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email is invalid.';
      }
      if (!message.trim()) newErrors.message = 'Message is required.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setStatus('sending');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Randomly succeed or fail for demonstration
      if (Math.random() > 0.1) {
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
      } else {
          setStatus('error');
      }
  };

  return (
    <section id="contact" className="py-24 bg-secondary-light dark:bg-secondary transition-colors duration-1000">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-dark dark:text-white">Let's Connect</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        <p className="max-w-2xl mx-auto text-lg text-muted-light dark:text-muted my-8">
          I'm currently seeking new opportunities. If you have a project in mind, a question, or just want to say hello, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark dark:text-light mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-primary-light dark:bg-primary border border-accent/20 dark:border-accent/30 rounded-md py-3 px-4 text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-1000"
                    placeholder="Your Name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-light mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-primary-light dark:bg-primary border border-accent/20 dark:border-accent/30 rounded-md py-3 px-4 text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-1000"
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-light mb-2">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-primary-light dark:bg-primary border border-accent/20 dark:border-accent/30 rounded-md py-3 px-4 text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-1000"
                    placeholder="How can I help you?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="text-center">
                <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center bg-accent text-white font-bold py-3 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg text-lg disabled:bg-accent/50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' && <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />}
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </div>

            {status === 'success' && (
                <p className="text-green-400 text-center mt-4">Thank you! Your message has been sent successfully.</p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-center mt-4">Oops! Something went wrong. Please try again later.</p>
            )}
        </form>

        <div className="flex justify-center space-x-6 mt-12">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted hover:text-accent transition-colors duration-300">
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;