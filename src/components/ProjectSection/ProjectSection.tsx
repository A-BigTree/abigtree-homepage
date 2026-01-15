import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Stack
} from '@mui/material';
import {
  Launch,
  GitHub,
  Description,
  ShoppingCart
} from '@mui/icons-material';
import type { Project, ProjectStatus } from '../../types';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects
}) => {
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

  const getStatusColor = (status: ProjectStatus): 'success' | 'info' | 'warning' | 'default' => {
    const colors: Record<ProjectStatus, 'success' | 'info' | 'warning' | 'default'> = {
      'completed': 'success',
      'in-progress': 'info',
      'planned': 'warning',
      'archived': 'default'
    };
    return colors[status];
  };

  const getLinkIcon = (type: string): React.ReactNode => {
    const icons: Record<string, React.ReactNode> = {
      demo: <Launch />,
      github: <GitHub />,
      docs: <Description />,
      npm: <ShoppingCart />
    };
    return icons[type] || <Launch />;
  };

  const renderProjectCard = (project: Project) => (
    <Card
      key={project.id}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Chip
            label={getStatusLabel(project.status)}
            size="small"
            color={getStatusColor(project.status)}
            variant="outlined"
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech.name}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
        </Box>
      </CardContent>

      {project.links && project.links.length > 0 && (
        <CardActions sx={{ pt: 0 }}>
          <Stack direction="row" spacing={1}>
            {project.links.map((link, index) => (
              <Button
                key={index}
                size="small"
                startIcon={getLinkIcon(link.type)}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </CardActions>
      )}
    </Card>
  );

  const renderProjectSection = (title: string, projectsList: Project[]) => {
    const count = projectsList.length;
    
    return (
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: count === 1 ? '1fr' : count === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: 3,
            '@media (max-width: 900px)': {
              gridTemplateColumns: count === 1 ? '1fr' : 'repeat(2, 1fr)'
            },
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr'
            }
          }}
        >
          {projectsList.map((project) => (
            <Box key={project.id}>
              {renderProjectCard(project)}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {recentProjects.length > 0 && renderProjectSection('最近项目', recentProjects)}
      
      {historyProjects.length > 0 && renderProjectSection('历史项目', historyProjects)}

      {recentProjects.length === 0 && historyProjects.length === 0 && (
        <Typography variant="body1" color="text.secondary" textAlign="center" py={8}>
          暂无项目
        </Typography>
      )}
    </Container>
  );
};

export default ProjectSection;
