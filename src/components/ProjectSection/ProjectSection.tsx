import React, { useState } from 'react';
import type { Project, ProjectStatus } from '../../types';
import './ProjectSection.css';

interface ProjectSectionProps {
  projects: Project[];
  title?: string;
  showStatus?: boolean;
  filterByStatus?: ProjectStatus[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects,
  title = '最近项目',
  showStatus = true,
  filterByStatus
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = filterByStatus
    ? projects.filter(project => filterByStatus.includes(project.status))
    : projects;

  const getStatusLabel = (status: ProjectStatus): string => {
    const labels: Record<ProjectStatus, string> = {
      'completed': '已完成',
      'in-progress': '进行中',
      'planned': '计划中',
      'archived': '已归档'
    };
    return labels[status];
  };

  const getStatusClass = (status: ProjectStatus): string => {
    const classes: Record<ProjectStatus, string> = {
      'completed': 'status-completed',
      'in-progress': 'status-in-progress',
      'planned': 'status-planned',
      'archived': 'status-archived'
    };
    return classes[status];
  };

  const getLinkLabel = (type: string): string => {
    const labels: Record<string, string> = {
      'demo': '预览',
      'github': 'GitHub',
      'docs': '文档',
      'npm': 'NPM'
    };
    return labels[type] || type;
  };

  return (
    <section className="project-section">
      <h2 className="section-title">{title}</h2>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.featured && (
              <div className="project-badge">⭐ 精选项目</div>
            )}
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              {showStatus && (
                <span className={`project-status ${getStatusClass(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
              )}
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className={`project-links ${hoveredProject === project.id ? 'visible' : ''}`}>
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`查看 ${link.label}`}
                  >
                    <span>{getLinkLabel(link.type)}</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
