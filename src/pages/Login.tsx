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
        p: 3,
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  mb: 2,
                }}
              >
                <Lock size={28} />
              </Box>
            </Box>
            
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
            
            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: `1px solid ${theme.palette.divider}`,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Or continue with social media
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 2,
                }}
              >
                {['#4267B2', '#1DA1F2', '#DB4437'].map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.default',
                      color: color,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Mail size={20} />
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;