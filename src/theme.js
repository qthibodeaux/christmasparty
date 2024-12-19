import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#333333', // Dark grey website background
      paper: '#4d4d4d', // Lighter grey for cards
    },
    text: {
      primary: '#FFFFFF', // White text
    },
    primary: {
      main: '#4A148C', // Dark purple
    },
    secondary: {
      main: '#9C27B0', // Light purple
    },
    warning: {
      main: '#FFD700', // Dark gold
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Square buttons
        },
      },
    },
  },
});

export default theme;
