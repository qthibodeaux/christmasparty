import React from 'react';
import Hero from './components/Hero';
import DateTime from './components/DateTime';
import Location from './components/Location';
import Activities from './components/Activities';
import FoodAndDrinks from './components/FoodAndDrinks';
import RSVP from './components/RSVP';

const App = () => (
  <>
    <Hero />
    <DateTime />
    <Location />
    <Activities />
    <FoodAndDrinks />
    <RSVP />
  </>
);

export default App;
