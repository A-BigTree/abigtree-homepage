import React from 'react';
import { Icon } from '@iconify/react';
import type { Project, ProjectStatus } from '../../types';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const recentProjects = projects.filter(p => p.category === 'recent');
  const historyProjects = projects.filter(p => p.category === 'history');

  const getStatusLabel = (status: ProjectStatus): string => {
    const labels: Record<ProjectStatus, string> = {
      'completed': '已完成',
      'in-progress': '进行中',
      'planned': '计划中',
      'archived': '已归档'
    };
    return labels[status];
  };

  const getStatusColor = (status: ProjectStatus): string => {
    const colors: Record<ProjectStatus, string> = {
      'completed': 'bg-green-500 text-white',
      'in-progress': 'bg-blue-500 text-white',
      'planned': 'bg-yellow-400 text-black',
      'archived': 'bg-gray-400 text-white'
    };
    return colors[status];
  };

  const getLinkIcon = (type: string): string => {
    const icons: Record<string, string> = {
      demo: 'mdi:launch',
      github: 'mdi:github',
      docs: 'mdi:file-document',
      npm: 'mdi:npm'
    };
    return icons[type] || 'mdi:launch';
  };

  const renderProjectCard = (project: Project, index: number) => {
    const isFeatured = project.featured || (index === 0);
    
    return (
      <div 
        key={project.id} 
        className={`brutal-card p-4 md:p-6 flex flex-col h-full ${
          isFeatured ? 'md:col-span-2' : ''
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
          <h3 className={`brutal-title text-xl md:text-2xl text-text leading-tight ${
            isFeatured ? 'md:text-3xl' : ''
          }`}>
            {project.title}
          </h3>
          <span className={`px-3 py-1 text-xs font-bold border-3 border-border shadow-hard ${getStatusColor(project.status)} shrink-0`}>
            {getStatusLabel(project.status)}
          </span>
        </div>

        <p className={`text-text mb-4 flex-1 leading-relaxed ${
          isFeatured ? 'text-sm md:text-base' : 'text-xs md:text-sm'
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-bold bg-surface border-3 border-border text-text hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t-4 border-border">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 font-bold text-sm bg-cta text-white border-3 border-border shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all duration-200"
              >
                <Icon icon={getLinkIcon(link.type)} className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderProjectSection = (title: string, projectsList: Project[]) => {
    const count = projectsList.length;
    
    return (
      <div className="mb-20">
        <h2 className="brutal-title text-4xl md:text-5xl lg:text-6xl mb-8 px-4 md:px-8">
          {title}
        </h2>
        
        <div className={`grid gap-6 px-4 md:px-8 ${
          count === 1 
            ? 'grid-cols-1 max-w-2xl' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {projectsList.map((project, index) => (
            <div key={project.id}>
              {renderProjectCard(project, index)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-0 geometric-grid">
      <div className="max-w-7xl mx-auto">
        {recentProjects.length > 0 && renderProjectSection('最近项目', recentProjects)}
      
        {historyProjects.length > 0 && renderProjectSection('历史项目', historyProjects)}

        {recentProjects.length === 0 && historyProjects.length === 0 && (
          <div className="text-center py-24">
            <div className="brutal-card p-12 inline-block max-w-md">
              <Icon icon="mdi:folder-open-outline" className="w-20 h-20 mx-auto mb-6" />
              <p className="text-2xl font-bold text-text">暂无项目</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
