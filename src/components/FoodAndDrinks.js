import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import FoodImage from '../assets/food.png'; // Add your food image to the assets folder

const FoodAndDrinks = () => {
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
          Food & Drinks
        </Typography>
        <img
          src={FoodImage}
          alt="Food"
          style={{ width: '100%', marginBottom: '16px' }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ul>
              <li>Wings</li>
              <li>Fries</li>
              <li>Queso</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Salad</li>
              <li>Soda</li>
              <li>Water</li>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FoodAndDrinks;
