import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WhoCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: '#444', // Slightly lighter than the website background
        color: 'white',
        margin: '16px',
        padding: '16px',
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: 'darkgold', marginBottom: '8px' }}
        >
          Who
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'lightgray',
            lineHeight: 1.6,
          }}
        >
          <strong>Calling All Mary’s Lambs!</strong>
          <br />
          <br />
          We are overjoyed to introduce a cherished new tradition for our
          family—a Christmas party dedicated to celebrating the joy, love, and
          warmth that Grandma Mary has brought into all our lives.
          <br />
          <br />
          This special gathering is an opportunity for us to come together,
          create beautiful memories, share laughter, and treasure each other's
          company. Whether you're part of the immediate family or the extended
          family that has been part of our journey, you’re invited to join us in
          making this a truly unforgettable celebration.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WhoCard;
