import { Box, Typography, Button, Alert, AlertTitle } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { Fade } from '@mui/material';

interface ErrorProps {
  error: Error;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  return (
    <Fade in timeout={300}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          px: 2
        }}
      >
        <Alert
          severity="error"
          sx={{
            maxWidth: 600,
            width: '100%',
            mb: 3
          }}
        >
          <AlertTitle>加载失败</AlertTitle>
          <Typography variant="body2">{error.message}</Typography>
        </Alert>
        
        {onRetry && (
          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={onRetry}
            size="large"
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5
            }}
          >
            重试
          </Button>
        )}
      </Box>
    </Fade>
  );
};

export default Error;
