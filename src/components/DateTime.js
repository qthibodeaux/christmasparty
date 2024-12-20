import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CalendarImage from '../assets/calendar.png'; // Add your calendar image to the assets folder

const DateTime = () => {
  return (
    <Card
      sx={{
        backgroundColor: '#444',
        color: 'white',
        margin: '16px',
        padding: '16px',
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{ color: 'darkgold', marginBottom: '8px' }}
        >
          When
        </Typography>
        <img
          src={CalendarImage}
          alt="Calendar"
          style={{ width: '100%', marginBottom: '16px' }}
        />
        <Typography
          variant="body1"
          sx={{ color: 'lightgray', lineHeight: 1.6 }}
        >
          Christmas Eve <br />
          December 24, 2024 <br />
          7:00 PM
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DateTime;
