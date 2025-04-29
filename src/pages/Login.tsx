import React from 'react';
import { Box, Card, CardContent, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { Mail, Lock } from 'lucide-react';
import LoginForm from '../components/LoginForm/Index';

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleLogin = (email: string, password: string, remember: boolean) => {
    console.log('Login attempt:', { email, password, remember });
    // Here you would typically handle authentication
    alert(`Login attempt with email: ${email} (Remember me: ${remember})`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 3,
        backgroundImage: 'radial-gradient(circle at 50% 14%, rgba(79, 93, 117, 0.04) 0%, rgba(45, 49, 66, 0.06) 60%)',
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Box
            sx={{
              height: '8px',
              width: '100%',
              bgcolor: 'primary.main',
            }}
          />
          <CardContent sx={{ p: isMobile ? 3 : 4 }}>
            
            <Typography 
              variant="h4" 
              component="h1" 
              align="center"
              sx={{ 
                mb: 1,
                fontWeight: 700,
              }}
            >
              Welcome Back
            </Typography>
            
            <Typography 
              variant="body1" 
              align="center"
              sx={{ 
                mb: 4,
                color: 'text.secondary'
              }}
            >
              Log in to your account to continue
            </Typography>
            
            <LoginForm onSubmit={handleLogin} />
        
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;