import React from 'react';
import { Box, Typography } from '@mui/material';
import Fam from '../assets/fam.jpg';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Fam})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFF',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Transparent dark overlay
        }}
      />
      <Typography variant="h2" sx={{ zIndex: 1, fontWeight: 'bold' }}>
        Thibodeaux Family
      </Typography>
      <Typography variant="h5" sx={{ zIndex: 1, marginTop: '10px' }}>
        Christmas Party 2024
      </Typography>
    </Box>
  );
};

export default Hero;
