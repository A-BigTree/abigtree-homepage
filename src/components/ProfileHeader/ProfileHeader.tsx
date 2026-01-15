import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Container,
  Chip,
  IconButton,
  Tooltip,
  Stack,
  Link,
  Fade
} from '@mui/material';
import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  Twitter,
  Chat,
  Article,
  Web
} from '@mui/icons-material';
import type { PersonalInfo, ContactLink, Skill } from '../../types';

interface ProfileHeaderProps {
  profile: PersonalInfo;
  contacts: ContactLink[];
  skills?: Skill[];
}

const getContactIcon = (type: ContactLink['type']) => {
  const icons: Record<ContactLink['type'], React.ReactNode> = {
    email: <Email />,
    github: <GitHub />,
    linkedin: <LinkedIn />,
    twitter: <Twitter />,
    website: <Language />,
    wechat: <Chat />,
    blog: <Article />,
    csdn: <Web />
  };
  return icons[type];
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, contacts, skills }) => {
  const visibleContacts = contacts
    .filter(contact => contact.visible)
    .sort((a, b) => a.order - b.order);

  const handleEmailClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith('mailto:')) {
      navigator.clipboard.writeText(url.replace('mailto:', ''));
      e.preventDefault();
      alert('邮箱地址已复制到剪贴板！');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        mb: 4
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 3
          }}
        >
          <Fade in timeout={600}>
            <Avatar
              src={profile.avatar}
              alt={profile.name}
              sx={{
                width: 120,
                height: 120,
                border: '4px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            />
          </Fade>

          <Fade in timeout={800}>
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
                {profile.name}
              </Typography>

              {profile.title && (
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    opacity: 0.95,
                    fontWeight: 400
                  }}
                >
                  {profile.title}
                </Typography>
              )}

              {profile.location && (
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.9,
                    mb: 2
                  }}
                >
                  📍 {profile.location}
                </Typography>
              )}

              {profile.bio && (
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.9,
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  {profile.bio}
                </Typography>
              )}

              {skills && skills.length > 0 && (
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  sx={{ mb: 3, flexWrap: 'wrap' }}
                >
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill.name}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.3)'
                        }
                      }}
                    />
                  ))}
                </Stack>
              )}

              {profile.languages && profile.languages.length > 0 && (
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  sx={{ mb: 3, flexWrap: 'wrap' }}
                >
                  {profile.languages.map((language, index) => (
                    <Chip
                      key={index}
                      label={language}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.3)'
                        }
                      }}
                    />
                  ))}
                </Stack>
              )}

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ flexWrap: 'wrap' }}
              >
                {visibleContacts.map((contact) => (
                  <Tooltip key={contact.type} title={contact.label}>
                    <Link
                      href={contact.url}
                      target={contact.type === 'email' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      onClick={(e) => contact.type === 'email' ? handleEmailClick(e, contact.url) : undefined}
                      sx={{
                        color: 'white',
                        '&:hover': {
                          color: 'rgba(255, 255, 255, 0.8)'
                        }
                      }}
                    >
                      <IconButton
                        size="large"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            transform: 'scale(1.1)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {getContactIcon(contact.type)}
                      </IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileHeader;
