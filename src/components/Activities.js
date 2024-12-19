import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
} from '@mui/material';

const activities = [
  'Family Trivia Game',
  'Festive Photo Booth',
  'Christmas Character Meet & Greet',
  'Fun Games for Everyone',
];

const Activities = () => (
  <Card
    sx={{
      backgroundColor: 'background.paper',
      padding: 2,
      margin: 2,
      textAlign: 'center',
      boxShadow: 3,
    }}
  >
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
  </Card>
);

export default Activities;
