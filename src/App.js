import React from 'react';
import Hero from './components/Hero';
import DateTime from './components/DateTime';
import Location from './components/Location';
import Activities from './components/Activities';
import FoodAndDrinks from './components/FoodAndDrinks';
import Who from './components/Who';

const App = () => (
  <>
    <Hero />
    <Who />
    <DateTime />
    <Location />
    <Activities />
    <FoodAndDrinks />
  </>
);

export default App;
