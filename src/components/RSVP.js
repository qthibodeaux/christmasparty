import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card } from '@mui/material';

const RSVP = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Send form data through Twilio or an API
    console.log(form);
  };

  return (
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
        RSVP
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: '#FFF' } }}
        />
        <TextField
          label="Phone"
          name="phone"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: '#FFF' } }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: '#FFF' } }}
        />
        <Button variant="contained" color="warning" onClick={handleSubmit}>
          Send RSVP
        </Button>
      </Box>
    </Card>
  );
};

export default RSVP;
