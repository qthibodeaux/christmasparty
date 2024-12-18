import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const activities = [
  'Family Trivia Game',
  'Festive Photo Booth',
  'Christmas Character Meet & Greet',
  'Fun Games for Everyone',
];

const Activities = () => (
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      Activities
    </Typography>
    <List>
      {activities.map((activity, index) => (
        <ListItem key={index} sx={{ justifyContent: 'center' }}>
          <ListItemText
            primary={activity}
            sx={{ textAlign: 'center', color: 'text.primary' }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Activities;
