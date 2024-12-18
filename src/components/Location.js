import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Location = () => (
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <iframe
      src="https://www.google.com/maps/embed/v1/place?q=17215+Brookhollow+Trace+Ct,+Houston,+TX+77084&key=YOUR_GOOGLE_API_KEY"
      style={{
        border: 0,
        width: '100%',
        height: '300px',
        marginBottom: '16px',
      }}
      allowFullScreen
      title="Google Map"
    />
    <Typography variant="h5" sx={{ mb: 1 }}>
      Quincy and Jessica's Home
    </Typography>
    <Link
      href="https://www.google.com/maps/place/17215+Brookhollow+Trace+Ct,+Houston,+TX+77084"
      target="_blank"
      rel="noopener noreferrer"
      color="warning.main"
    >
      17215 Brookhollow Trace Ct, Houston, TX 77084
    </Link>
  </Box>
);

export default Location;
