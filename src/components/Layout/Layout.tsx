import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'grey.50' }}>
      {children}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          backgroundColor: 'white',
          borderTop: 1,
          borderColor: 'divider',
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} 个人主页. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
