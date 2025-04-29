import React from 'react';
import { Box, Card, CardContent, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { UserPlus } from 'lucide-react';
import SignUpForm from '../components/RegisterForm/Index';

const SignUpPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSignUp = (firstName: string, lastName: string, email: string, password: string) => {
    console.log('Sign up attempt:', { firstName, lastName, email });
    // Here you would typically handle registration
    alert(`Sign up attempt for ${firstName} ${lastName} (${email})`);
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
      <Container  maxWidth="md">
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
              Create Account
            </Typography>
            
            <Typography 
              variant="body1" 
              align="center"
              sx={{ 
                mb: 4,
                color: 'text.secondary'
              }}
            >
              Sign up to get started with your new account
            </Typography>
            
            <SignUpForm onSubmit={handleSignUp} />
            
            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: `1px solid ${theme.palette.divider}`,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Typography
                  component="span"
                  variant="body2"
                  color="primary"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign in here
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SignUpPage;