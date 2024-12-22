import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ActivitiesImage from '../assets/family.jpg'; // Add your activities image to the assets folder

const Activities = () => {
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
          What
        </Typography>
        <img
          src={ActivitiesImage}
          alt="Activities"
          style={{ width: '100%', marginBottom: '16px' }}
        />
        <Typography
          variant="body1"
          sx={{ color: 'lightgray', lineHeight: 1.6 }}
        >
          - Food <br />
          - Games <br />
          - Activities <br />- Family & Fun
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Activities;
