import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <img 
              src="https://i.postimg.cc/W1m72hyT/new-samir-image.jpg" 
              alt="A portrait of John Doe" 
              className="rounded-2xl shadow-2xl object-cover w-80 h-80 bg-primary p-4 mx-auto"
            />
          </div>
          <div className="lg:w-2/3 text-lg text-muted space-y-6">
            <p>
              Hello! I'm John, a passionate Data Analyst with a knack for discovering hidden patterns and stories within data. My journey into the world of analytics began with a deep curiosity about how data could be leveraged to make smarter, more impactful decisions.
            </p>
            <p>
              With over 5 years of experience, I've honed my skills in SQL, Python, and data visualization tools like Tableau and Power BI. I thrive on transforming raw data into clear, concise, and visually compelling dashboards that empower stakeholders to understand complex trends at a glance.
            </p>
            <p>
              Whether it's building predictive models or conducting deep-dive exploratory analyses, my goal is always the same: to provide actionable insights that drive business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;