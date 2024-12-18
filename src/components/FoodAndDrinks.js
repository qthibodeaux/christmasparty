import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const foods = ['Wings', 'Fries', 'Queso', 'Salad', 'Desserts', 'Drinks'];

const FoodAndDrinks = () => (
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      Food & Drinks
    </Typography>
    <List>
      {foods.map((food, index) => (
        <ListItem key={index} sx={{ justifyContent: 'center' }}>
          <ListItemText
            primary={food}
            sx={{ textAlign: 'center', color: 'text.primary' }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default FoodAndDrinks;
