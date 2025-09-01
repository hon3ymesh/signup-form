// App.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';
import SignupForm from './components/SignupForm';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#3B82F6',
    },
    background: {
      default: '#f8fafc',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          background: 'linear-gradient(135deg, #3B47A3 0%, #4F5BA8 100%)',
        }}
      >
        {/* Left Side - Blue Section */}
        <Box
          sx={{
            flex: '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '80px 60px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginBottom: '60px',
              fontSize: '32px'
            }}
          >
            vistora
          </Typography>

          {/* Main Content */}
          <Box sx={{ maxWidth: '400px' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '42px',
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: '24px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                opacity: 0.9,
                marginBottom: '60px'
              }}
            >
              Mauris sit amet imperdiet nisl. Aliquam ornare rhoncus sapien in ultrices. Nunc at urna facilisis, porttitor enim sit amet, dictum nibh.
            </Typography>

            {/* Progress Indicators */}
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'white',
                  borderRadius: '2px'
                }}
              />
              <Box
                sx={{
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '2px'
                }}
              />
              <Box
                sx={{
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '2px'
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Right Side - White Section */}
        <Box
          sx={{
            flex: '0 0 50%',
            backgroundColor: 'white',
            borderRadius: '24px 0 0 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 80px',
            position: 'relative'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '476px' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#1F2937',
                marginBottom: '8px',
                textAlign: 'center',
                lineHeight: 1.3
              }}
            >
              You're almost there — let's finish setting up your account.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <SignupForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;