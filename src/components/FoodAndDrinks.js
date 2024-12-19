import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
} from '@mui/material';

const foods = ['Wings', 'Fries', 'Queso', 'Salad', 'Desserts', 'Drinks'];

const FoodAndDrinks = () => (
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
  </Card>
);

export default FoodAndDrinks;
