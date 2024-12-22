import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import Fam from '../assets/fam.jpg'; // Import the image
import Granny from '../assets/granny2.jpg';

const Hero = () => {
  return (
    <Card
      sx={{
        backgroundImage: `url(${Granny})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        boxShadow: 3,
        borderRadius: 2,
        margin: 2,
        padding: 3,
        color: '#FFF',
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
    </Card>
  );
};

export default Hero;
