import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import MapImage from '../assets/map.png'; // Add your map image to the assets folder

const Location = () => {
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
          Where
        </Typography>
        <img
          src={MapImage}
          alt="Map"
          style={{ width: '100%', marginBottom: '16px' }}
        />
        <Typography
          variant="body1"
          sx={{ color: 'lightgray', lineHeight: 1.6 }}
        >
          Quincy and Jessica’s Home <br />
          17215 Brookhollow Trace Ct, Houston, TX 77084 <br />
          <a
            href="https://maps.google.com/?q=17215+Brookhollow+Trace+Ct,+Houston,+TX+77084"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'darkgold', textDecoration: 'underline' }}
          >
            Open in Google Maps
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Location;
