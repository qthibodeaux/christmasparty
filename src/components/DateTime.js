import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateTime = () => (
  <Box
    sx={{
      textAlign: 'center',
      color: 'text.primary',
      py: 4,
    }}
  >
    <CalendarTodayIcon sx={{ fontSize: 50, color: 'warning.main' }} />
    <Typography variant="h4" sx={{ mt: 2 }}>
      Christmas Eve
    </Typography>
    <Typography variant="h6">December 24th, 6:00 PM</Typography>
  </Box>
);

export default DateTime;
