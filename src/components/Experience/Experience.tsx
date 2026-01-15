import React from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent
} from '@mui/material';
import {
  School,
  CalendarToday,
  Work
} from '@mui/icons-material';
import type { Experience, ExperienceType } from '../../types';

interface ExperienceSectionProps {
  experience?: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience = []
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const formatDate = (date: string, endDate?: string) => {
    const start = new Date(date);
    const end = endDate ? new Date(endDate) : new Date();
    
    const formatYear = (d: Date) => d.getFullYear().toString();
    const formatMonth = (d: Date) => (d.getMonth() + 1).toString().padStart(2, '0');
    
    const startStr = `${formatYear(start)}.${formatMonth(start)}`;
    const endStr = endDate ? `${formatYear(end)}.${formatMonth(end)}` : '至今';
    
    return `${startStr} - ${endStr}`;
  };

  const getIcon = (type: ExperienceType) => {
    return type === 'education' ? <School /> : <Work />;
  };

  const getColor = (type: ExperienceType) => {
    return type === 'education' ? 'secondary' : 'primary';
  };

  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    if (isMobile) {
      return dateB.getTime() - dateA.getTime();
    }
    return dateA.getTime() - dateB.getTime();
  });

  if (sortedExperience.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="body1" color="text.secondary" textAlign="center" py={8}>
          暂无经历信息
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 5 }}>
        个人经历
      </Typography>
      
      <Box sx={{ px: { xs: 0, md: 2 } }}>
        {!isMobile ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${sortedExperience.length}, 1fr)`, gap: 0 }}>
            {sortedExperience.map((exp, index) => (
              <Box 
                key={exp.id}
                sx={{ 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  py: 2
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: getColor(exp.type) + '.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: 3,
                    zIndex: 2
                  }}
                >
                  {getIcon(exp.type)}
                </Box>

                {index < sortedExperience.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -20,
                      top: 24,
                      width: 40,
                      height: '2px',
                      backgroundColor: '#eaeaf0',
                      zIndex: 0
                    }}
                  />
                )}

                <Box sx={{ textAlign: 'center', maxWidth: 280, width: '100%' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: '1.1rem',
                      color: getColor(exp.type) + '.main',
                      mb: 0.5
                    }}
                  >
                    {exp.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ 
                      fontWeight: 400, 
                      fontSize: '0.9rem',
                      color: 'text.primary',
                      mb: 0.5
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <CalendarToday sx={{ fontSize: '0.8rem' }} />
                    <Typography component="span" variant="caption" sx={{ fontSize: '0.8rem' }}>
                      {formatDate(exp.startDate, exp.endDate)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {sortedExperience.map((exp, index) => (
                <Box
                  key={exp.id}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: getColor(exp.type) + '.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: 3,
                      flexShrink: 0
                    }}
                  >
                    {getIcon(exp.type)}
                  </Box>

                  {index < sortedExperience.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 24,
                        top: 48,
                        width: '2px',
                        height: 'calc(100% + 8px)',
                        backgroundColor: '#eaeaf0'
                      }}
                    />
                  )}

                  <Card sx={{ flex: 1, boxShadow: 1 }}>
                    <CardContent sx={{ py: 2 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ 
                          fontWeight: 600, 
                          fontSize: '1.15rem',
                          color: getColor(exp.type) + '.main',
                          mb: 0.5
                        }}
                      >
                        {exp.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ 
                          fontWeight: 400, 
                          fontSize: '0.95rem',
                          color: 'text.primary',
                          mb: 1
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                        <CalendarToday sx={{ fontSize: '0.85rem' }} />
                        <Typography component="span" variant="body2" sx={{ fontSize: '0.85rem' }}>
                          {formatDate(exp.startDate, exp.endDate)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ExperienceSection;
