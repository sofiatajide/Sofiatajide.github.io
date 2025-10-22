import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { AllIcon, CodeIcon, DatabaseIcon, ExternalLinkIcon, GithubIcon } from './Icons';

// ProjectCard must be defined outside of Projects component
const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => (
  <div
    className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer animate-fade-in-up"
    onClick={() => onSelect(project)}
  >
    <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-2 text-on-surface-secondary text-sm">
        {project.category === ProjectCategory.PRODUCT ? <CodeIcon /> : <DatabaseIcon />}
        <span>{project.category}</span>
      </div>
      <h3 className="font-bold text-xl mb-2 text-on-surface group-hover:text-primary transition-colors duration-300">{project.title}</h3>
      <p className="text-on-surface-secondary text-base">{project.shortDescription}</p>
    </div>
  </div>
);

// ProjectDetailModal must be defined outside of Projects component
const ProjectDetailModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-surface rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <img className="w-full h-64 object-cover rounded-t-lg" src={project.image} alt={project.title} />
          <button onClick={onClose} className="absolute top-4 right-4 bg-background/50 text-white rounded-full p-2 hover:bg-background/80 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-on-surface mb-2">{project.title}</h2>
          <div className="flex items-center gap-2 mb-4 text-on-surface-secondary text-sm">
            {project.category === ProjectCategory.PRODUCT ? <CodeIcon /> : <DatabaseIcon />}
            <span>{project.category} Project</span>
          </div>
          <p className="text-on-surface-secondary leading-relaxed mb-6">{project.longDescription}</p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-on-surface mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-background py-1 px-3 rounded-full text-sm text-on-surface-secondary">{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition-colors">
                <ExternalLinkIcon /> View Live
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors">
                <GithubIcon /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' || project.category === filter
  );

  const categoryIcons: Record<ProjectCategory | 'All', React.ReactNode> = {
    'All': <AllIcon />,
    [ProjectCategory.PRODUCT]: <CodeIcon />,
    [ProjectCategory.DATA]: <DatabaseIcon />,
  };

  const FilterTag: React.FC<{ category: ProjectCategory | 'All'; currentFilter: typeof filter; setFilter: typeof setFilter }> = ({ category, currentFilter, setFilter }) => (
    <button
      onClick={() => setFilter(category)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
        currentFilter === category
          ? 'bg-primary text-white border-primary'
          : 'bg-surface text-on-surface-secondary border-slate-700/50 hover:border-primary hover:text-on-surface'
      }`}
    >
      {categoryIcons[category]}
      <span>{category}</span>
    </button>
  );

  return (
    <section>
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-on-surface mb-3">My Work</h2>
        <p className="text-lg text-on-surface-secondary">A collection of my product and data projects.</p>
      </div>

      <div className="flex justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <FilterTag category="All" currentFilter={filter} setFilter={setFilter} />
        <FilterTag category={ProjectCategory.PRODUCT} currentFilter={filter} setFilter={setFilter} />
        <FilterTag category={ProjectCategory.DATA} currentFilter={filter} setFilter={setFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;