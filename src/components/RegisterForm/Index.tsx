import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  InputAdornment, 
  IconButton,
  Grid
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface SignUpFormProps {
  onSubmit: (firstName: string, lastName: string, email: string, password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!re.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain at least one number';
    }
    return '';
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };

  const validateName = (name: string, field: string) => {
    if (!name) {
      return `${field} is required`;
    }
    if (name.length < 2) {
      return `${field} must be at least 2 characters`;
    }
    return '';
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const firstNameValidation = validateName(firstName, 'First name');
    const lastNameValidation = validateName(lastName, 'Last name');
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(confirmPassword);
    
    setFirstNameError(firstNameValidation);
    setLastNameError(lastNameValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setConfirmPasswordError(confirmPasswordValidation);
    
    if (!firstNameValidation && !lastNameValidation && !emailValidation && 
        !passwordValidation && !confirmPasswordValidation) {
      onSubmit(firstName, lastName, email, password);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (firstNameError) setFirstNameError('');
            }}
            error={!!firstNameError}
            helperText={firstNameError}
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (lastNameError) setLastNameError('');
            }}
            error={!!lastNameError}
            helperText={lastNameError}
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />
        </Grid>
      </Grid>

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) setEmailError('');
        }}
        error={!!emailError}
        helperText={emailError}
        InputProps={{
          sx: { borderRadius: 2 }
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (passwordError) setPasswordError('');
        }}
        error={!!passwordError}
        helperText={passwordError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          sx: { borderRadius: 2 }
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        id="confirmPassword"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if (confirmPasswordError) setConfirmPasswordError('');
        }}
        error={!!confirmPasswordError}
        helperText={confirmPasswordError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          sx: { borderRadius: 2 }
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ 
          mt: 3, 
          mb: 2,
          py: 1.5,
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default SignUpForm;