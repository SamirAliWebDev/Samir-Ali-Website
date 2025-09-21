import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { GithubIcon } from './icons/SocialIcons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden group border border-accent/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:border-accent">
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <div className="flex space-x-4">
               {project.repoUrl && (
                   <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                       <GithubIcon className="w-10 h-10" />
                   </a>
               )}
               {project.liveUrl && (
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition-all duration-300">
                       Live Demo
                   </a>
               )}
           </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-muted mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary text-accent text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">My Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;