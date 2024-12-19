import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateTime = () => (
  <Card
    sx={{
      backgroundColor: 'background.paper',
      color: 'text.primary',
      padding: 2,
      margin: 2,
      textAlign: 'center',
      boxShadow: 3,
    }}
  >
    <CalendarTodayIcon sx={{ fontSize: 50, color: 'warning.main' }} />
    <Typography variant="h4" sx={{ mt: 2 }}>
      Christmas Eve
    </Typography>
    <Typography variant="h6">December 24th, 6:00 PM</Typography>
  </Card>
);

export default DateTime;
