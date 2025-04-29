import { createTheme } from '@mui/material/styles';

// Color definitions from the provided palette
const colors = {
  gunmetal: '#2d3142',
  paynesGray: '#4f5d75',
  silver: '#bfc0c0',
  white: '#ffffff',
  coral: '#ef8354',
};

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: colors.coral,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.paynesGray,
      contrastText: colors.white,
    },
    background: {
      default: colors.gunmetal,
      paper: colors.white,
    },
    text: {
      primary: colors.gunmetal,
      secondary: colors.paynesGray,
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: colors.gunmetal,
    },
    body1: {
      color: colors.paynesGray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          padding: '10px 16px',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(239, 131, 84, 0.25)',
          },
        },
        containedPrimary: {
          backgroundColor: colors.coral,
          '&:hover': {
            backgroundColor: '#e67242',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.coral,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.coral,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.paynesGray,
          '&.Mui-checked': {
            color: colors.coral,
          },
        },
      },
    },
  },
});

export default theme;