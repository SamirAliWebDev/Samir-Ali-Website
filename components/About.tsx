
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary-light dark:bg-secondary transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <img 
              src="https://i.postimg.cc/W1m72hyT/new-samir-image.jpg" 
              alt="A portrait of Samir Ali" 
              className="rounded-2xl shadow-2xl object-cover w-80 h-80 bg-primary-light dark:bg-primary p-4 mx-auto"
            />
          </div>
          <div className="lg:w-2/3 text-lg text-muted-light dark:text-muted space-y-6">
            <p>
              Hello! I'm Samir, a detail-oriented Data Analyst with a passion for uncovering insights from data. With 12 months of hands-on experience, I have developed a strong foundation in data cleaning, analysis, and creating impactful visualizations.
            </p>
            <p>
              My journey is fueled by a deep curiosity to understand the stories hidden within datasets. I am proficient with a range of tools and technologies including Python (Pandas, Matplotlib, Seaborn), SQL, and Power BI, which I use to transform complex information into clear, actionable intelligence.
            </p>
            <p>
              I possess strong analytical and communication skills, allowing me to effectively convey findings. I am always eager to take on new challenges and contribute to data-driven success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;